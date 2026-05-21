import { FormEvent, useEffect, useState } from 'react'
import { Star } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { supabase, isSupabaseConfigured, Review } from '@/lib/supabase'

function StarRating({
  value,
  onChange,
  readOnly = false,
  size = 24,
}: {
  value: number
  onChange?: (n: number) => void
  readOnly?: boolean
  size?: number
}) {
  const [hover, setHover] = useState(0)
  return (
    <div className="flex gap-1" role={readOnly ? undefined : 'radiogroup'} aria-label="Star rating">
      {[1, 2, 3, 4, 5].map((n) => {
        const active = (hover || value) >= n
        return (
          <button
            key={n}
            type="button"
            disabled={readOnly}
            onClick={() => onChange?.(n)}
            onMouseEnter={() => !readOnly && setHover(n)}
            onMouseLeave={() => !readOnly && setHover(0)}
            className={`transition-transform ${readOnly ? 'cursor-default' : 'hover:scale-110 cursor-pointer'}`}
            aria-label={`${n} star${n > 1 ? 's' : ''}`}
          >
            <Star
              size={size}
              weight={active ? 'fill' : 'regular'}
              className={active ? 'text-amber-400' : 'text-muted-foreground'}
            />
          </button>
        )
      })}
    </div>
  )
}

export function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [name, setName] = useState('')
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (!supabase) {
      setLoading(false)
      return
    }
    supabase
      .from('reviews')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(50)
      .then(({ data, error }) => {
        if (error) setError(error.message)
        else setReviews((data ?? []) as Review[])
        setLoading(false)
      })
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!supabase) return
    if (!name.trim() || !comment.trim() || rating < 1) {
      setError('Please provide your name, a rating, and a comment.')
      return
    }
    setSubmitting(true)
    setError(null)
    const { data, error } = await supabase
      .from('reviews')
      .insert({ name: name.trim(), rating, comment: comment.trim() })
      .select()
      .single()
    setSubmitting(false)
    if (error) {
      setError(error.message)
      return
    }
    setReviews((prev) => [data as Review, ...prev])
    setName('')
    setRating(0)
    setComment('')
    setSuccess(true)
    setTimeout(() => setSuccess(false), 3000)
  }

  return (
    <section className="py-16 sm:py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">Community Reviews</h2>
          <p className="text-muted-foreground">Hear from the families we serve — and share your own story.</p>
        </div>

        {!isSupabaseConfigured ? (
          <Card className="border-amber-400/50 bg-amber-50/40 dark:bg-amber-950/20">
            <CardContent className="p-6 text-sm leading-relaxed">
              <p className="font-semibold mb-2">Reviews backend not configured yet.</p>
              <p className="text-muted-foreground">
                Add <code className="bg-background/80 px-1 py-0.5 rounded">VITE_SUPABASE_URL</code> and{' '}
                <code className="bg-background/80 px-1 py-0.5 rounded">VITE_SUPABASE_ANON_KEY</code> to a{' '}
                <code className="bg-background/80 px-1 py-0.5 rounded">.env</code> file in the project root, then
                restart the dev server. See <code>SUPABASE_SETUP.md</code>.
              </p>
            </CardContent>
          </Card>
        ) : (
          <>
            <Card className="mb-10 border-t-4 border-t-primary">
              <CardHeader>
                <CardTitle className="text-xl">Leave a Review</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block" htmlFor="review-name">
                      Name
                    </label>
                    <Input
                      id="review-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      maxLength={80}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Rating</label>
                    <StarRating value={rating} onChange={setRating} size={28} />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block" htmlFor="review-comment">
                      Comment
                    </label>
                    <Textarea
                      id="review-comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Share your experience..."
                      rows={4}
                      maxLength={1000}
                      required
                    />
                  </div>
                  {error && <p className="text-sm text-destructive">{error}</p>}
                  {success && <p className="text-sm text-green-600">Thanks for sharing! Your review is live.</p>}
                  <Button type="submit" disabled={submitting} className="bg-accent hover:bg-accent/90">
                    {submitting ? 'Posting…' : 'Post Review'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {loading ? (
                <p className="text-center text-muted-foreground">Loading reviews…</p>
              ) : reviews.length === 0 ? (
                <p className="text-center text-muted-foreground">No reviews yet. Be the first!</p>
              ) : (
                reviews.map((r) => (
                  <Card key={r.id} className="bg-card/80">
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <p className="font-semibold">{r.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(r.created_at).toLocaleDateString(undefined, {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </p>
                        </div>
                        <StarRating value={r.rating} readOnly size={18} />
                      </div>
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{r.comment}</p>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
