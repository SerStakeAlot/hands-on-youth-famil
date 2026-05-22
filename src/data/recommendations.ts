// Add a new entry below for each letter of recommendation.
// If you have the original (PDF/image), drop it in `src/assets/recommendations/`
// and import it at the top, then set `file` on the entry.
//
// Example with file:
//   import smithLetter from '@/assets/recommendations/smith-jane.pdf?url'
//   { name: 'Jane Smith', role: '...', excerpt: '...', file: smithLetter }

export type Recommendation = {
  name: string
  role: string
  organization?: string
  source?: 'Email' | 'Letter' | 'Word Document'
  date?: string
  excerpt: string
  fullText?: string
  file?: string
  email?: string
  phone?: string
  featured?: boolean
}

export const recommendations: Recommendation[] = [
  {
    name: 'Stella Wilson',
    role: 'Owner',
    organization: 'Kiddie Kove Learning Center',
    source: 'Letter',
    date: 'May 19, 2026',
    email: 'info@kiddiekovelearning.org',
    phone: '470-749-8832',
    featured: true,
    excerpt:
      'Kiddie Kove Learning Center utilizes the services of Hands on Youth to provide additional support and assistance for children with behavioral challenges, as well as support for our after-school program operations.',
    fullText: `Verification of Services Letter

To Whom It May Concern:

This letter serves as confirmation that Kiddie Kove Learning Center utilizes the services of Hands on Youth to provide additional support and assistance for children with behavioral challenges, as well as support for our after-school program operations.

Hands on Youth provides behavioral support strategies, enrichment activities, and structured after-school services designed to help scholars succeed socially, emotionally, and academically in a positive environment.

We value the partnership and services provided by Hands on Youth and appreciate their continued commitment to supporting the children and families we serve. Please contact our office if additional information is needed.

Sincerely,
Stella Wilson
Owner
Kiddie Kove Learning Center`,
  },
  {
    name: 'Asha el-Shair',
    role: 'Dramatic Writing and Writer’s Workshop Instructor',
    organization: 'KIPP Atlanta Collegiate',
    source: 'Letter',
    email: 'ael-shair@kippatl.org',
    excerpt:
      'Ms. Lowe’s experienced hand guided him smoothly through each day. I have watched my 5 year old grow into a much more independent little boy this school year. She hasn’t just taught him to write his name and skip count — she has laid a foundation for good habits that will serve him well as he begins his educational journey.',
    fullText: `This letter is intended to serve as a recommendation for Ms. Hile Lowe. I have greatly appreciated her kind nature and consistent presence during my son’s first year in school. Pre-K could have been a difficult transition; however, Ms. Lowe’s experienced hand guided him smoothly through each day. I have watched my 5 year old grow into a much more independent little boy this school year. She hasn’t just taught him to write his name and skip count, she has laid a foundation for good habits that will serve him well as he begins his educational journey.

As an experienced educator but a relatively new mom, Ms. Lowe reminds me of the power a teacher has to impact a student’s day. Her classroom is predictable and organized yet warm. She knows her students’ habits and personalities. I feel confident when I drop my child off that he is with a caring and knowledgeable adult. As the year comes to an end and my oldest gets ready for his first graduation, I hope that she will still be around in 3 years when my youngest is ready to begin preschool. As a parent, this is the greatest recommendation that I can give.

If you have any questions in regards to Ms. Lowe’s abilities, please feel free to contact me using the information below.

Sincerely,
Asha el-Shair
Dramatic Writing and Writer’s Workshop Instructor`,
  },
  {
    name: 'LaShawn Boykin',
    role: 'Parent | Community Supporter | Health & Wellness Advocate',
    source: 'Letter',
    date: 'May 19, 2026',
    email: 'lashawncw@gmail.com',
    excerpt:
      'Hile Lowe leads this organization with integrity, warmth, and an unwavering dedication to the children and families she serves. She is the kind of leader who builds genuine trust — with families, with collaborators, and with the broader community.',
    fullText: `Re: Letter of Recommendation — Hands on Youth & Family Project Inc. for After-school Program Services

I am pleased to recommend Hands on Youth & Family Project Inc., led by Hile Lowe. As a friend who has observed this organization’s work firsthand, I can confidently say she brings the expertise, passion, and community commitment that after-school programs need to make a real difference.

This dedicated 501(c)3 nonprofit believes every child deserves the opportunity to thrive. Their mission — to empower families with the knowledge, resources, and support needed for healthy social, emotional, and educational development — is carried out through strong partnerships with families, educators, and community members. Their specialized advocacy for children navigating autism, ADHD, and anxiety ensures that every child, regardless of their unique needs, receives the wraparound support they deserve. In a diverse after-school setting, this expertise is invaluable.

Hile Lowe leads this organization with integrity, warmth, and an unwavering dedication to the children and families she serves. She is the kind of leader who builds genuine trust — with families, with collaborators, and with the broader community. Partnering with Hands on Youth & Family Project Inc. means gaining not just a qualified service provider, but a values-driven partner fully invested in your program’s success.

I recommend this organization without reservation. Please feel free to reach out if you have any questions.

With sincere support,
LaShawn Boykin`,
  },
  {
    name: 'Jennifer Gyimah',
    role: 'Grandparent of program scholar',
    source: 'Letter',
    date: 'May 18, 2026',
    excerpt:
      'I have personally witnessed tremendous growth and progress in my grandson as a direct result of her encouragement, leadership, and support. He has come a long way under her guidance.',
    fullText: `It is my honor to write this letter of recommendation on behalf of Ms. Hile Lowe. I would like to sincerely commend her for the outstanding work she does with our children and the positive impact she continues to make in their lives.

Ms. Hile Lowe demonstrates exceptional patience, passion, dedication, and commitment in guiding and teaching young people. It takes a truly special individual to accept the responsibility and calling of helping shape the next generation, and she does so with excellence and compassion. Her investment in our children’s growth and future does not go unnoticed.

I have personally witnessed tremendous growth and progress in my grandson as a direct result of her encouragement, leadership, and support. He has come a long way under her guidance, and I truly believe her commitment has played a significant role in his personal and academic development.

Ms. Hile Lowe continues to pour into our children with love, wisdom, and care, never giving up on them and always encouraging them to become their best selves. Her work is deeply appreciated and deserving of the highest recommendation.

Please feel free to regard this letter as my sincere endorsement of Ms. Hile Lowe and the incredible work she does for our youth.

Sincerely,
Jennifer Gyimah

GOD IS LOVE ❤️❤️❤️`,
  },
  {
    name: 'A Pre-K Parent',
    role: 'Parent of Pre-K scholar',
    source: 'Letter',
    date: 'May 18, 2026',
    excerpt:
      'When my child entered her classroom, he was not communicating well nor did he have alphabet and numeracy knowledge. She has given him the confidence that he needs to strive. I have no doubt that because he had Ms. Hile, he will soar in kindergarten.',
    fullText: `This letter is in recommendation for Ms. Hile Lowe. She has been my child's teacher for the school year for pre-K. I must say since day one I have been impressed. At open house she clearly gave her expectations and what the school year would look like for our scholars. I must say she did not get away from that plan. She made learning fun, as my child loved to come to school.

And the growth was so amazing. When my child entered her classroom, he was not communicating well nor did he have alphabet and numeracy knowledge. She has given him the confidence that he needs to strive. I have no doubt that because he had Ms. Hile, he will soar in kindergarten. The students knew their goals, they celebrated their growth, and the pre-K experience has been all around amazing thanks to Ms. Hile.

We need more teachers as passionate as her.`,
  },
  {
    name: 'Brandi Fashaw',
    role: 'Pre-K Parent',
    source: 'Letter',
    date: 'May 17, 2026',
    excerpt:
      'Ms. Hile Lowe is a rare gem in the field of education. Her passion, perseverance, and holistic investment in both her students and their families make her an invaluable asset to any educational community.',
    fullText: `It is with great pleasure and the utmost enthusiasm that I write this letter of recommendation for Ms. Hile Lowe. As a parent whose daughter has had the privilege of being in her Pre-K classroom, I have witnessed firsthand the extraordinary dedication, warmth, and skill she brings to early childhood education. Ms. Lowe is not just an educator; she is a foundational force in the lives of the children and families she serves.

Ms. Lowe’s passion for early childhood development is evident in every aspect of her classroom. She possesses a deep, intuitive understanding of how young minds learn and grow, and she translates this into highly engaging teaching strategies. She turns every lesson into an interactive experience, capturing the imaginations of her students and instilling a genuine love for learning at a critical stage in their development.

What truly sets Ms. Lowe apart is her unwavering belief in building early confidence. She facilitates a vibrant, supportive environment where children learn to be confident in their capabilities from the very beginning. In her classroom, perseverance is a core value; she beautifully teaches her students that giving up is simply not an option. Because of her gentle guidance and high expectations, children learn to navigate challenges with resilience, discovering just how capable they truly are.

Beyond her excellent curriculum and classroom management, Ms. Lowe is an exceptional communicator. She keeps families seamlessly connected to their child's daily progress and milestones. Her commitment to her students doesn't stop at the classroom door, either. Ms. Lowe possesses a rare, "above and beyond" attitude, actively supporting families beyond her class and deeply investing in each family unit as a whole. Whether offering resources, guidance, or a listening ear, she ensures that parents feel partnered with and supported.

Ms. Hile Lowe is a rare gem in the field of education. Her passion, perseverance, and holistic investment in both her students and their families make her an invaluable asset to any educational community. I recommend her with the highest confidence and without reservation.

Please feel free to contact me if you require any further information.

Sincerely,
Brandi Fashaw
Pre-K Parent`,
  },
  {
    name: 'Oleasha Harris',
    role: 'Parent of two former students',
    source: 'Letter',
    date: 'May 16, 2026',
    excerpt:
      'She does not just teach a curriculum; she invests whole-heartedly in the "scholars development" of each child, tailoring her approach to ensure they truly grasp the material and grow in confidence.',
    fullText: `It is an absolute pleasure to write this letter of recommendation on behalf of Ms. Hile. As a parent whose children have had the privilege of being in her classroom, I have experienced firsthand her incredible dedication, passion, and unique talent for fostering student development.

Over the years, Ms. Hile has taught two of my children. During this time, I have watched her go above and beyond for every single student in her care. She does not just teach a curriculum; she invests whole-heartedly in the "scholars development" of each child, tailoring her approach to ensure they truly grasp the material and grow in confidence. Her passion for education is evident in everything she does, creating an environment where children feel motivated and excited to learn.

Beyond her excellent teaching abilities, Ms. Hile is remarkably sweet, kind, and understanding. She possesses a rare warmth that makes her classroom feel safe and welcoming. As a parent, I have deeply appreciated her commitment to parent engagement. She maintains open, honest, and supportive communication, making parents feel like true partners in their children’s education.

Ultimately, Ms. Hile wants nothing but absolute success for those around her, and she works tirelessly to help her students achieve it. She is an exceptional educator and an even more wonderful person. I give her my highest and most enthusiastic recommendation.

Sincerely,
Oleasha Harris`,
  },
  {
    name: 'Jazmine and Gerard Labeaud',
    role: 'Pre-K Parents',
    source: 'Letter',
    excerpt:
      'One of the things I admire most about Ms. Hile is her strong parent engagement. She consistently communicates with families, keeps parents informed about student progress, and makes parents feel involved in their child’s educational journey.',
    fullText: `It is my pleasure to write this letter of recommendation on behalf of Ms. Hile. During my experience working with her as our daughter’s Pre-K teacher, I have witnessed firsthand her dedication, compassion, and commitment to early childhood education.

Ms. Hile has played a meaningful role in our daughter’s scholarly development and overall growth. She creates a positive and nurturing learning environment where children feel encouraged, supported, and excited to learn. Her patience, creativity, and ability to connect with each child individually truly set her apart.

One of the things I admire most about Ms. Hile is her strong parent engagement. She consistently communicates with families, keeps parents informed about student progress, and makes parents feel involved in their child’s educational journey. Her willingness to collaborate and build relationships with families shows her genuine passion for helping children succeed both academically and emotionally.

In addition to her professionalism, Ms. Hile brings passion and heart into everything she does. It is clear that teaching is more than a job to her — it is a calling. She goes above and beyond to ensure her students feel valued, confident, and motivated to reach their full potential.

I am truly grateful for the positive impact she has had on our daughter and our family. I confidently recommend Ms. Hile and believe she would be a valuable asset in any educational setting.

Sincerely,
Jazmine and Gerard Labeaud`,
  },
  {
    name: 'Shontavius Barnes',
    role: 'Pre-K Parent, Little Ones Learning Center',
    source: 'Letter',
    excerpt:
      'My son looked forward to going to school each day because of the warmth, patience, and enthusiasm she consistently brought into the classroom. I have seen tremendous growth in his communication skills, independence, and social development under her guidance.',
    fullText: `I am writing to wholeheartedly recommend Hile Lowe, who has been my son’s Pre-K teacher at Little Ones Learning Center. Over the course of this school year, she has made an incredible impact on my child’s academic growth, confidence, and love for learning.

From the very beginning, Ms. Lowe created a nurturing, structured, and engaging classroom environment where every child feels valued and supported. My son looked forward to going to school each day because of the warmth, patience, and enthusiasm she consistently brought into the classroom.

What stands out most is her ability to connect with each child individually while also encouraging teamwork, kindness, and curiosity among the students. She demonstrates exceptional creativity in her teaching methods and finds ways to make learning both meaningful and fun. I have seen tremendous growth in my son’s communication skills, independence, and social development under her guidance.

In addition to being an excellent educator, Ms. Lowe is also a wonderful communicator with parents. She keeps families informed, celebrates student progress, and genuinely cares about the well-being of her students both inside and outside the classroom.

I cannot say enough positive things about the dedication, professionalism, and compassion she brings to her work every day. Any school or program would be fortunate to have her as part of their team, and I recommend her without hesitation.

Please feel free to contact me if you have any questions or would like additional information.

Sincerely,
Shontavius Barnes
(678) 598-5710`,
  },
  {
    name: 'Deanisha Rutherford',
    role: 'Parent',
    source: 'Letter',
    excerpt:
      'What stands out most about Hile is her deep commitment to scholar development. She does not simply teach lessons — she invests in the whole child. She creates an environment where my child feels safe, capable, and empowered to succeed.',
    fullText: `I am honored to write this letter of recommendation for Hile. It has been a true privilege to witness the incredible impact she has had on my child’s academic growth, confidence, and overall development as a scholar.

From the very beginning, Hile demonstrated a remarkable ability to connect with my child in a way that was both encouraging and effective. Her individualized approach to teaching helped identify my child’s strengths while patiently supporting areas that needed improvement. Due to her guidance, I have seen noticeable progress not only academically, but also in my child’s confidence, motivation, and willingness to learn independently.

What stands out most about Hile is her deep commitment to scholar development. She does not simply teach lessons — she invests in the whole child. She creates an environment where my child feels safe, capable, and empowered to succeed. Her experience as a certified teacher working with children is evident in the compassion, patience, and adaptability she brings to every session. She understands that every child learns differently and consistently tailors her methods to meet individual needs.

In addition to her excellence as an educator, Hile maintains exceptional parent engagement. She communicates clearly and consistently, keeping parents informed about progress, challenges, and goals. I always felt included in my child’s educational journey and appreciated the level of professionalism and care she brought to every interaction. Her willingness to collaborate with families demonstrates how deeply she values scholar success both inside and outside of tutoring sessions.

I also greatly admire her passion for teaching and community service. Starting her own nonprofit private tutoring organization speaks volumes about her dedication to making quality educational support accessible to students and families. Her work goes beyond tutoring; it reflects a genuine mission to uplift children and help them realize their full potential.

Hile is knowledgeable, compassionate, dependable, and truly gifted in her field. I wholeheartedly recommend her to any family, school, or organization seeking an educator who leads with both expertise and heart. I am confident that she will continue to make a lasting impact in the lives of the scholars and families she serves.

Please feel free to contact me if additional information is needed.

Sincerely,
Deanisha Rutherford`,
  },
  {
    name: 'Tamanique Cooper',
    role: 'Parent',
    source: 'Letter',
    excerpt:
      'In less than a month of working with my daughter, I witnessed a tremendous improvement in her confidence, reading fundamentals, fluency, and phonics comprehension. The progress made in such a short amount of time was truly remarkable.',
    fullText: `I, Tamanique Cooper, am pleased to write this letter of recommendation for Hile Lowe. During the time I have known and worked with her, she has consistently demonstrated a strong commitment to scholar development, meaningful parent engagement, and a genuine passion for helping others succeed.

Hile has a natural ability to connect with scholars in a way that encourages growth, confidence, and accountability. She creates supportive and positive environments where students feel seen, motivated, and empowered to reach their full potential. Her dedication to scholar development goes beyond expectations, as she continuously seeks ways to inspire academic and personal success.

In less than a month of working with my daughter, I witnessed a tremendous improvement in her confidence, reading fundamentals, fluency, and phonics comprehension. Hile’s patience, encouragement, and intentional teaching approach helped strengthen not only my daughter’s academic abilities but also her self-esteem and willingness to learn. The progress made in such a short amount of time was truly remarkable and speaks volumes about Hile’s passion and effectiveness as an educator and mentor.

In addition, her ability to build strong relationships with parents and families is truly admirable. She understands the importance of communication, trust, and collaboration between families and educational support systems. Through her welcoming and compassionate approach, she fosters parent engagement that strengthens the overall experience and success of the scholars she serves.

Above all, Hile leads with passion. Her care for people is evident in everything she does, and she approaches her work with professionalism, empathy, and determination. She is dependable, hardworking, and deeply invested in making a positive impact within her community.

I confidently recommend Hile Lowe for any opportunity she pursues. I believe she will continue to be an asset wherever she goes and will leave a lasting impression on those she serves.

Sincerely,
Tamanique Cooper`,
  },
  {
    name: 'Shalimar Cuevas',
    role: 'Parent of Samara and Suheily',
    source: 'Letter',
    excerpt:
      'My daughters, Samara and Suheily, had the privilege of having Ms. Hile as their teacher, and I have personally seen growth in both of them since the beginning of the school year. Through patience, creativity, and consistent encouragement, she helps students build confidence in their abilities.',
    fullText: `It is my pleasure to write this letter of recommendation for Ms. Hile. I have had the opportunity to see her dedication, professionalism, and commitment to student success, and I can confidently say she is an exceptional educator.

Her ability to support positive scholar development has left an impact on my children. Ms. Hile creates a learning environment where students feel encouraged, challenged, and motivated to grow both academically and personally. My daughters, Samara and Suheily, had the privilege of having Ms. Hile as their teacher, and I have personally seen growth in both of them since the beginning of the school year. Through patience, creativity, and consistent encouragement, she helps students build confidence in their abilities while creating critical thinking and responsibility.

In addition to her impact in the classroom, Ms. Hile has demonstrated outstanding parent engagement. She maintains open, respectful, and effective communication with families, ensuring parents remain informed and involved in their child’s educational journey. Since becoming my children's teacher I have had consistent updates of their grades, accomplishments, upcoming events, etc. Her willingness to collaborate with parents reflects the understanding that student success is strengthened through strong school-home partnerships.

I strongly recommend Ms. Hile and am confident that she will continue to make a positive impact wherever she teaches. Please feel free to contact me if additional information is needed.

Sincerely,
Shalimar Cuevas`,
  },
  {
    name: 'Parent of Tajiri',
    role: 'Parent',
    source: 'Letter',
    excerpt:
      'My son came home every day more wiser and more smarter, expressing himself and saying things I never heard him say before. I would always ask who taught you that word and he will proudly say Ms. Lowe.',
    fullText: `This letter is to express my appreciation for my son’s teacher Ms. Lowe and to express the positivity she impacted on my son and myself throughout the school year.

From the beginning Ms. Lowe created an open and comfortable environment for both parents and children. She expressed to me her goal for the school year with each child. She educated me on her educational background which made me more comfortable with trusting her to teach and lead my son.

What stood out the most to me was my son coming home every day more wiser and more smarter. Expressing himself and saying things I never heard him say before. I would always ask who taught you that word and he will proudly say Ms. Lowe. That alone made me as a parent gravitate towards her and want to really know her as a person.

After speaking to her more and more and growing closely to her I was able to understand that her love for her students is unconditional. She protects them as a Teacher and a mother. She assures that the children are being challenged so that they can be more prepared in life when it’s time to move along and grow without her.

We hope that being without her is not an option though. Me and my son Tajiri love Ms. Lowe. I wouldn’t have asked for a better guardian while my son is left at school without me for long hours of the day. Thank you for your outstanding work.`,
  },
]

