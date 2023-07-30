import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    /*Introduction Section */
    <div className='xl:max-w-[1500px] lg:max-w-[1200px] md:max-w-[800px] max-w-[380px] mx-auto'>
      <section className='flex w-full items-center justify-center font-kanit text-[22px] text-center mt-[50px]'>
        In this 8 week long project, I worked as an intern UX designer, performing various activities including conducting usability test,
        creating paper and digital wireframes, creating low and high fidelity prototypes and iterating over designs based on user feedback
      </section>

      {/**Hero Section */}

      <section className='flex flex-col items-center justify-center mt-[50px]'>
        <Image src='/assets/header.png' alt='ArtMania Screenshots' width={700} height={700} />
        <p className='font-kanit text-[42px] italic text-center mt-[100px]'>
          <span className='text-accent font-bold'>ArtMania</span> is an hobbyist app for art enthusiasts and students to pursue their passions
          and advance their career.
        </p>
      </section>

      {/*Research Section */}

      <section>
        <h1 className='font-kanit text-[52px] underline decoration-accent uppercase tracking-[8px] mt-[100px]'>
          Research
        </h1>
        <p className='text-[18px] text-justify mt-[10px]'>
          I conducted usability studies and created empathy maps to empathies with the app users. While researching, primary group was identified
          to be art students while the secondary group were artists
          <br />
          Research revealed that the user group faced variety of problem in their art careers including time mismanagement, artisitic block, lack
          of resources, limited access to art community, and no access to art experts.
        </p>
        <h4 className='uppercase text-[24px] font-kanit font-bold tracking-[4px] mt-[50px]'>Research Goals</h4>

        <div className='grid grid-cols-2 w-full mt-[50px] gap-8'>
          {/*1st Grid */}
          <article className='w-full h-[300px] bg-accent text-primary flex items-center justify-center rounded-lg'>
            <p className='text-[24px] text-center p-8'>
              What are the pain points that user experience while using other art studio apps
            </p>
          </article>
          {/*2nd Grid */}
          <article className='w-full h-[300px] bg-accent text-primary flex items-center justify-center rounded-lg'>
            <p className='text-[24px] text-center p-8'>
              How is the experience of viewing art digitally and can it replace the common way of experiencing art?
            </p>
          </article>
          {/*3rd Grid */}
          <article className='w-full h-[300px] bg-accent text-primary flex items-center justify-center rounded-lg'>
            <p className='text-[24px] text-center p-8'>
              How is the easy is it to book an appointment with an expert? Is it affordable? Does it really help the customer?
            </p>
          </article>
          {/*4 Grid */}
          <article className='w-full h-[300px] bg-accent text-primary flex items-center justify-center rounded-lg'>
            <p className='text-[24px] text-center p-8'>
              How easy is it to find a desired eBook? Is all the modern art related eBooks available? How it can be further improved?
            </p>
          </article>

        </div>
        {/*painpoints */}
        <h4 className='uppercase text-[24px] font-kanit font-bold tracking-[4px] mt-[100px]'>Pain points indentified</h4>
        <div className='grid grid-cols-3 gap-10 mt-[50px]'>

          {/*1st Grid */}
          <article className='relative w-full h-[250px] bg-painpoint bg-cover bg-no-repeat flex items-center justify-center rounded-lg'>
            <div className='absolute inset-0 backdrop-blur-[2px]' />
            <p className='text-[24px] text-center p-8 text-primary relative z-10 font-bold'>
              Artists usually faced artistic block, restricting their creativity. They usually require motivation or an idea to overcome that.
            </p>
          </article>

          {/*2nd Grid */}
          <article className='relative w-full h-[250px] bg-painpoint bg-cover bg-no-repeat flex items-center justify-center rounded-lg'>
            <div className='absolute inset-0 backdrop-blur-[2px]' />
            <p className='text-[24px] text-center p-8 text-primary relative z-10 font-bold'>
              Not all art enthusiasts had access to art auctions and museums where they can buy or view modern art
            </p>
          </article>
          {/*3rd Grid */}
          <article className='relative w-full h-[250px] bg-painpoint bg-cover bg-no-repeat flex items-center justify-center rounded-lg'>
            <div className='absolute inset-0 backdrop-blur-[2px]' />
            <p className='text-[24px] text-center p-8 text-primary relative z-10 font-bold'>
              Some users have lack of access to resources to advance their career
            </p>
          </article>
        </div>
      </section>

      {/*Script */}

      {/*Personas */}
      <section className='flex flex-col items-start justify-center mt-[100px]'>
        <p className='text-[22px] font-kanit'>
          As an intern, I created personas which were fictional characters representing different users that will be using the product. Elizabeth
          Johnson is an art enthusiastic who needs an easy access to art resources and works because she wants to pursue her art hobbies and
          create a Udemy animation course
        </p>
        <Image src='/assets/persona.png' alt="Persona Image" width={800} height={800} className='mt-[50px]' />
        <p className='text-[22px] mt-[50px]'>
          Mapping Elizabeth’s user journey revealed how helpful it would be for art enthusiastics to have an art-focused app like ArtMania
        </p>
        <Image src='/assets/userJourney.png' alt="Persona Image" width={800} height={800} className='mt-[50px]' />
      </section>

      {/*Design Section */}
      <section className='flex flex-col items-start justify-center'>
        <h1 className='font-kanit text-[52px] underline decoration-accent uppercase tracking-[8px] mt-[100px] '>
          Design Process
        </h1>
        {/*userflow */}
        <p className='mt-[100px] text-[22px]'>
          I created a user flow of how the user will navigate through the app and complete their desired activity. The task was to use
          ArtMania app to have access to resource to advance art career.
        </p>
        <Image src='/assets/userflow.png' alt="User Flow" width={800} height={800} className='mt-[50px] self-center' />

        {/*paper wireframe */}
        <h4 className='uppercase text-[24px] font-kanit font-bold tracking-[4px] mt-[100px]'>
          Paper Wireframes
        </h4>
        <p className='mt-[50px] text-[22px]'>
          The goal of creating a paper wireframe for the homepage of an art studio app that offers an art eBook collection and expert consultation
          is to establish a clear and user-friendly interface that effectively communicates the apps features and benefits
        </p>
        <Image src='/assets/paperwireFrame.jpg' alt="Paper wireframe" width={800} height={800} className='mt-[50px] self-center' />

        {/*digital wireframe */}
        <h4 className='uppercase text-[24px] font-kanit font-bold tracking-[4px] mt-[100px]'>
          Digital Wireframes
        </h4>
        <p className='mt-[50px] text-[22px]'>
          After selecting the best possible design to offer better user experience, I created a digital wireframe using Figma. The homepage is
          designed in that minimise user searching time for their task as most of the user have time management issues. The homage is divided into
          clear section to improve user navigation
        </p>
        <Image src='/assets/digital-wireframe-1.png' alt="Homepage wireframe" width={800} height={800} className='mt-[50px] self-center' />
        <p className='mt-[50px] text-[22px]'>
          In the intial stage of desiging I tried to made sure the content as explicit as possible to make it user friendly and base it on the
          user research I already conducted
        </p>
        <Image src='/assets/digital-wireframe-2.png' alt="Expert page wireframe" width={800} height={800} className='mt-[50px] self-center' />

        {/*low fidelity prototype */}
        <h4 className='uppercase text-[24px] font-kanit font-bold tracking-[4px] mt-[100px]'>
          Digital Wireframes
        </h4>
        <p className='mt-[50px] text-[22px]'>
          I connected all the wireframes to create an interactive prototype which can be used to for usbaility test to identify pain points and
          iterate over the design based on the user feedback
          <br />
          <Link href='https://www.figma.com/proto/f5wP8FlZkCE2HoYvb4zKsU/Untitled?page-id=0%3A1&node-id=8-488&starting-point-node-id=1%3A2'
            className='pt-[20px] text-accent text-[18px] hover:font-bold'
          >
            https://www.figma.com/proto/f5wP8FlZkCE2HoYvb4zKsU/Untitled?page-id=0%3A1&node-id=8-488&starting-point-node-id=1%3A2
          </Link>
        </p>
        <Image src='/assets/low-fidelity.png' alt="Expert page wireframe" width={800} height={800} className='mt-[50px] self-center' />
        <h4 className='uppercase text-[24px] font-kanit font-bold tracking-[4px] mt-[100px]'>
          Usability Test
        </h4>
        <div className='flex items-center justify-center lg:flex-row flex-co w-full'>
          <p className='mt-[50px] text-[22px] w-1/2'>
            I conducted an unmoderated usability test containing 5 participants, three females and two male. One was artist by profession, two
            were students, one was expert and one was random person. A group of tasks were assigned to each individual and their behavior, feelings
            , and saying were noted.
            <br />
            <br />
            The following tasks were assigned
            <ul className=' list-inside list-disc text-[18px] mt-[20px]'>
              <li className='ml-4'>Open the ArtMania app and sign up as a user</li>
              <li className='ml-4'>Go to the art section and open an art piece</li>
              <li className='ml-4'>Find a high-rated expert and book an appointment on 26 of May 9am</li>
              <li className='ml-4'>If I ask you to find and buy me eBook, would you able to know where to go and how to buy it?</li>
              <li className='ml-4'>How do you feel about the ArtMania app? What you like and what you dislike?</li>
            </ul>
          </p>
          <Image src='/assets/usability.png' alt="Expert page wireframe" width={800} height={800} className='w-1/2' />
        </div>

        <h4 className='uppercase text-[24px] font-kanit font-bold tracking-[4px] mt-[100px]'>
          Affinity Diagram
        </h4>
        <p className='mt-[50px] text-[22px] '>
          An affinity diagram was created based on the notes taken during the usability which was used to organise the notes based on their
          relationship
        </p>
        <div className='grid grid-cols-2 gap-10'>
          <article className='w-full'>
            <Image src='/assets/affinity-confusion.png' alt='Affinity Diagram' width={800} height={800} className='object-cover' />
          </article>
          <article className='w-full'>
            <Image src='/assets/affinity-missing.png' alt='Affinity Diagram' width={800} height={800} className='object-cover' />
          </article>
          <article className='w-full'>
            <Image src='/assets/affinity-friendly.png' alt='Affinity Diagram' width={800} height={800} className='object-cover' />
          </article>
          <article className='w-full'>
            <Image src='/assets/affinity-navigation.png' alt='Affinity Diagram' width={800} height={800} className='object-cover' />
          </article>
        </div>

        <p className='mt-[50px] text-[22px] font-kanit '>
          Two rounds of usability tests were conducted. First for the low-fidelity and the other for high-fidelity. The findings of the first
          round helped in refining the wireframes while the second round lead to refining the mockups
        </p>

        {/*Findings */}
        <div className='grid md:grid-cols-2 grid-cols-1 gap-10 mt-[50px]'>
          {/*1st Grid */}
          <article className='flex items-center justify-center w-full bg-accent/50 list-inside h-[250px] rounded-lg'>
            <ol className=' list-decimal text-[22px] p-8 text-primary font-bold text-left'>
              <li className='ml-4'>
                Users had difficulty in searching for eBooks
              </li>
              <li className='ml-4'>
                Signin and Signup lacked features like confirm password, see password
              </li>
              <li className='ml-4'>
                Users wants to have expert ratings on home page
              </li>
            </ol>
          </article>
          {/*2nd Grid */}
          <article className='flex items-center justify-center w-full bg-accent/50 list-inside h-[250px] rounded-lg'>
            <ol className=' list-decimal text-[22px] p-8 text-primary font-bold text-left'>
              <li className='ml-4'>
                Users want calendar for booking
              </li>
              <li className='ml-4'>
                Users want to return to homepage after completing checkout
              </li>
            </ol>
          </article>

        </div>

        <h4 className='uppercase text-[24px] font-kanit font-bold tracking-[4px] mt-[100px]'>
          Mockups
        </h4>
        <p className='mt-[50px] text-[22px] font-kanit '>
          After iterating over initial design based ojn user feedback, I craeted mockups by applying different Gestalt principles to make
          my design standout and help user complete their task without and setbacks.
        </p>

      </section>
    </div>
  )
}

export default Home