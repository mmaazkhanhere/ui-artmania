import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    /*Introduction Section */
    <div className='xl:max-w-[1500px] lg:max-w-[1200px] md:max-w-[800px] max-w-[380px] mx-auto p-5 lg:p-0'>
      <nav className='flex flex-col md:flex-row items-center justify-center mt-2'>
        <Link href="/"
          className="w-16 md:w-20 h-16 md:h-20 bg-secondary text-primary flex items-center justify-center 
          rounded-full text-xl md:text-2xl font-bold border border-solid border-transparent ">
          MMK
        </Link>
      </nav>
      <section className='flex w-full items-center justify-center font-kanit text-[20px] lg:text-[22px] text-center mt-[50px]'>
        In this 8 week long project, I worked as an intern UX designer, performing various activities including conducting usability test,
        creating paper and digital wireframes, creating low and high fidelity prototypes and iterating over designs based on user feedback
      </section>

      {/**Hero Section */}

      <section className='flex flex-col items-center justify-center mt-[50px]'>
        <Image src='/assets/header.png' alt='ArtMania Screenshots' width={700} height={700}
          className='w-[400px] md:w-[650px] lg:w-[700px]'
        />
        <p className='font-kanit text-[32px]  md:text-[38px] lg:text-[42px] italic text-center mt-[100px]'>
          <span className='text-accent font-bold'>ArtMania</span> is an hobbyist app for art enthusiasts and students to pursue their passions
          and advance their career.
        </p>
      </section>

      {/*Research Section */}

      <section>
        <h1 className='font-kanit text-[40px] md:text-[46px] lg:text-[52px] underline decoration-accent uppercase tracking-[8px] mt-[100px]'>
          Research
        </h1>
        <p className='text-[16px] lg:text-[18px] text-justify mt-[10px]'>
          I conducted usability studies and created empathy maps to empathies with the app users. While researching, primary group was identified
          to be art students while the secondary group were artists
          <br />
          Research revealed that the user group faced variety of problem in their art careers including time mismanagement, artisitic block, lack
          of resources, limited access to art community, and no access to art experts.
        </p>
        <h4 className='uppercase text-[20px] md:text-[22px] lg:text-[24px] font-kanit font-bold tracking-[4px] mt-[50px]'>
          Research Goals
        </h4>

        <div className='grid grid-cols-1 md:grid-cols-2 w-full mt-[50px] gap-8'>
          {/*1st Grid */}
          <article className='w-full h-[300px] bg-accent text-primary flex items-center justify-center rounded-lg'>
            <p className='text-[20px] md:text-[22px] lg:text-[24px] text-center p-8'>
              What are the pain points that user experience while using other art studio apps
            </p>
          </article>
          {/*2nd Grid */}
          <article className='w-full h-[300px] bg-accent text-primary flex items-center justify-center rounded-lg'>
            <p className='text-[20px] md:text-[22px] lg:text-[24px] text-center p-8'>
              How is the experience of viewing art digitally and can it replace the common way of experiencing art?
            </p>
          </article>
          {/*3rd Grid */}
          <article className='w-full h-[300px] bg-accent text-primary flex items-center justify-center rounded-lg'>
            <p className='text-[20px] md:text-[22px] lg:text-[24px] text-center p-8'>
              How is the easy is it to book an appointment with an expert? Is it affordable? Does it really help the customer?
            </p>
          </article>
          {/*4 Grid */}
          <article className='w-full h-[300px] bg-accent text-primary flex items-center justify-center rounded-lg'>
            <p className='text-[20px] md:text-[22px] lg:text-[24px] text-center p-8'>
              How easy is it to find a desired eBook? Is all the modern art related eBooks available? How it can be further improved?
            </p>
          </article>

        </div>
        {/*painpoints */}
        <h4 className='uppercase text-[20px] md:text-[22px] lg:text-[24px] font-kanit font-bold tracking-[4px] mt-[100px]'>
          Pain points indentified
        </h4>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-[50px]'>

          {/*1st Grid */}
          <article className='relative w-full h-[250px] bg-painpoint bg-cover bg-no-repeat flex items-center justify-center rounded-lg'>
            <div className='absolute inset-0 backdrop-blur-[2px]' />
            <p className='text-[22px] md:text-[24px] text-center p-8 text-primary relative z-10 font-bold'>
              Artists usually faced artistic block, restricting their creativity. They usually require motivation or an idea to overcome that.
            </p>
          </article>

          {/*2nd Grid */}
          <article className='relative w-full h-[250px] bg-painpoint bg-cover bg-no-repeat flex items-center justify-center rounded-lg'>
            <div className='absolute inset-0 backdrop-blur-[2px]' />
            <p className='text-[22px] md:text-[24px] text-center p-8 text-primary relative z-10 font-bold'>
              Not all art enthusiasts had access to art auctions and museums where they can buy or view modern art
            </p>
          </article>
          {/*3rd Grid */}
          <article className='relative w-full h-[250px] bg-painpoint bg-cover bg-no-repeat flex items-center justify-center rounded-lg'>
            <div className='absolute inset-0 backdrop-blur-[2px]' />
            <p className='text-[22px] md:text-[24px] text-center p-8 text-primary relative z-10 font-bold'>
              Some users have lack of access to resources to advance their career
            </p>
          </article>
        </div>
      </section>

      {/*Script */}

      {/*Personas */}
      <section className='flex flex-col items-start justify-center mt-[100px]'>
        <p className='text-[18px] md:text-[20px] lg:text-[22px] font-kanit'>
          As an intern, I created personas which were fictional characters representing different users that will be using the product. Elizabeth
          Johnson is an art enthusiastic who needs an easy access to art resources and works because she wants to pursue her art hobbies and
          create a Udemy animation course
        </p>
        <Image src='/assets/persona.png' alt="Persona Image" width={800} height={800}
          className='mt-[50px] md:w-[700px] lg:w-[800px]'
        />
        <p className='text-[18px] md:text-[20px] lg:text-[22px] mt-[50px]'>
          Mapping Elizabeth’s user journey revealed how helpful it would be for art enthusiastics to have an art-focused app like ArtMania
        </p>
        <Image src='/assets/userJourney.png' alt="Persona Image" width={800} height={800}
          className='mt-[50px] md:w-[700px] lg:w-[800px]'
        />
      </section>

      {/*Design Section */}
      <section className='flex flex-col items-start justify-center'>
        <h1 className='font-kanit text-[40px] md:text-[46px] lg:text-[52px] underline decoration-accent uppercase tracking-[8px] mt-[100px] '>
          Design Process
        </h1>
        {/*userflow */}
        <p className='mt-[100px] text-[18px] md:text-[20px] lg:text-[22px]'>
          I created a user flow of how the user will navigate through the app and complete their desired activity. The task was to use
          ArtMania app to have access to resource to advance art career.
        </p>
        <Image src='/assets/userflow.png' alt="User Flow" width={800} height={800}
          className='mt-[50px] md:w-[700px] lg:w-[800px]'
        />

        {/*paper wireframe */}
        <h4 className='uppercase text-[20px] md:text-[22px] lg:text-[24px] font-kanit font-bold tracking-[4px] mt-[100px]'>
          Paper Wireframes
        </h4>
        <p className='mt-[50px] text-[18px] md:text-[20px] lg:text-[22px]'>
          The goal of creating a paper wireframe for the homepage of an art studio app that offers an art eBook collection and expert consultation
          is to establish a clear and user-friendly interface that effectively communicates the apps features and benefits
        </p>
        <Image src='/assets/paperwireFrame.jpg' alt="Paper wireframe" width={800} height={800}
          className='mt-[50px] md:w-[700px] lg:w-[800px]'
        />

        {/*digital wireframe */}
        <h4 className='uppercase text-[20px] md:text-[22px] lg:text-[24px] font-kanit font-bold tracking-[4px] mt-[100px]'>
          Digital Wireframes
        </h4>
        <p className='mt-[50px] text-[18px] md:text-[20px] lg:text-[22px]'>
          After selecting the best possible design to offer better user experience, I created a digital wireframe using Figma. The homepage is
          designed in that minimise user searching time for their task as most of the user have time management issues. The homage is divided into
          clear section to improve user navigation
        </p>
        <Image src='/assets/digital-wireframe-1.png' alt="Homepage wireframe" width={800} height={800}
          className='mt-[50px] md:w-[700px] lg:w-[800px] self-center'
        />
        <p className='mt-[50px] text-[18px] md:text-[20px] lg:text-[22px]'>
          In the intial stage of desiging I tried to made sure the content as explicit as possible to make it user friendly and base it on the
          user research I already conducted
        </p>
        <Image src='/assets/digital-wireframe-2.png' alt="Expert page wireframe" width={800} height={800}
          className='mt-[50px] md:w-[700px] lg:w-[800px] self-center'
        />
        <h4 className='uppercase text-[20px] md:text-[22px] lg:text-[24px] font-kanit font-bold tracking-[4px] mt-[100px]'>
          Low Fidelity Prototype
        </h4>
        <p className='mt-[50px] text-[18px] md:text-[20px] lg:text-[22px]'>
          I connected all the wireframes to create an interactive prototype which can be used to for usbaility test to identify pain points and
          iterate over the design based on the user feedback
        </p>
        <Link href='https://www.figma.com/proto/f5wP8FlZkCE2HoYvb4zKsU/Untitled?page-id=0%3A1&node-id=8-488&starting-point-node-id=1%3A2'
          className='pt-[20px] text-accent text-[18px] hover:font-bold'
        >
          Prototype Link
        </Link>
        <Image src='/assets/low-fidelity.png' alt="Expert page wireframe" width={800} height={800}
          className='mt-[50px] md:w-[700px] lg:w-[800px] self-center'
        />
        {/*Usability Test */}
        <h4 className='uppercase text-[20px] md:text-[22px] lg:text-[24px] font-kanit font-bold tracking-[4px] mt-[100px]'>
          Usability Test
        </h4>
        <div className='flex lg:items-center justify-center lg:flex-row flex-col w-full'>
          <p className='mt-[50px] text-[18px] md:text-[20px] lg:text-[22px] lg:w-1/2'>
            I conducted an unmoderated usability test containing 5 participants, three females and two male. One was artist by profession, two
            were students, one was expert and one was random person. A group of tasks were assigned to each individual and their behavior, feelings
            , and saying were noted.
            <br />
            <br />
            The following tasks were assigned
            <ul className=' list-inside list-disc text-[16px] lg:text-[18px] mt-[20px]'>
              <li className='ml-4'>Open the ArtMania app and sign up as a user</li>
              <li className='ml-4'>Go to the art section and open an art piece</li>
              <li className='ml-4'>Find a high-rated expert and book an appointment on 26 of May 9am</li>
              <li className='ml-4'>If I ask you to find and buy me eBook, would you able to know where to go and how to buy it?</li>
              <li className='ml-4'>How do you feel about the ArtMania app? What you like and what you dislike?</li>
            </ul>
          </p>
          <Image src='/assets/usability.png' alt="Expert page wireframe" width={800} height={800} className='lg:w-1/2 mt-[50px] lg:mt-0' />
        </div>

        <h4 className='uppercase text-[20px] md:text-[22px] lg:text-[24px] font-kanit font-bold tracking-[4px] mt-[100px]'>
          Affinity Diagram
        </h4>
        <p className='mt-[50px] text-[18px] md:text-[20px] lg:text-[22px] '>
          An affinity diagram was created based on the notes taken during the usability which was used to organise the notes based on their
          relationship
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-[25px] md:mt-[50px] lg:mt-0'>
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

        <p className='mt-[50px] text-[18px] md:text-[20px] lg:text-[22px] font-kanit '>
          Two rounds of usability tests were conducted. First for the low-fidelity and the other for high-fidelity. The findings of the first
          round helped in refining the wireframes while the second round lead to refining the mockups
        </p>

        {/*Findings */}
        <div className='grid md:grid-cols-2 grid-cols-1 gap-5 lg:gap-10 mt-[50px]'>
          {/*1st Grid */}
          <article className='flex items-center justify-center w-full bg-accent/50 list-inside h-[250px] rounded-lg p-6 md:p-0'>
            <ol className=' list-decimal text-[18px] md:text-[20px] lg:text-[22px] md:p-4 lg:p-8 text-primary font-bold text-left'>
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
          <article className='flex items-center justify-center w-full bg-accent/50 list-inside h-[250px] rounded-lg p-6 md:p-0'>
            <ol className=' list-decimal text-[18px] md:text-[20px] lg:text-[22px] md:p-4 lg:p-8 text-primary font-bold text-left'>
              <li className='ml-4'>
                Users want calendar for booking
              </li>
              <li className='ml-4'>
                Users want to return to homepage after completing checkout
              </li>
            </ol>
          </article>

        </div>

        <h4 className='uppercase text-[20px] md:text-[22px] lg:text-[24px] font-kanit font-bold tracking-[4px] mt-[100px]'>
          Mockups
        </h4>
        <p className='mt-[50px] text-[18px] md:text-[20px] lg:text-[22px] font-kanit '>
          After iterating over initial design based ojn user feedback, I craeted mockups by applying different Gestalt principles to make
          my design standout and help user complete their task without and setbacks. Large fonts and use of contrast color against a light
          background aims to attract user attention to features of the app
        </p>
        <Image src='/assets/mockup-1.png' alt="Paper wireframe" width={800} height={800} className='mt-[50px] self-center' />
        <p className='mt-[50px] text-[18px] md:text-[20px] lg:text-[22px] '>
          A search bar is included at the top of the page to make eBook searching easy. Hero image and text is provided to highlight to the
          user the section they are navigating in. I also revised the use of secondary color for each category and it will make the content
          feel overcrowded
        </p>
        <Image src='/assets/mockup-2.png' alt="Paper wireframe" width={800} height={800} className='mt-[50px] self-center' />

        {/*high fidelity prototype */}

        <h4 className='uppercase text-[20px] md:text-[22px] lg:text-[24px] font-kanit font-bold tracking-[4px] mt-[100px]'>
          High Fidelity Prototype
        </h4>
        <p className='mt-[50px] text-[18px] md:text-[20px] lg:text-[22px] font-kanit'>
          Based on the mockups, I created a high fidelity prototype that overcame the pain points user faced in the low-fidelity prototype.
          It represents the final interactive version of the project.
        </p>
        <Link
          href='https://www.figma.com/proto/BEYOcWrj1oMpmxNGPnzsTf/Untitled?page-id=0%3A1&type=design&node-id=1-9&viewport=-698%2C66%2C0.86&scaling=scale-down&starting-point-node-id=1%3A2'
          className=' text-accent text-[18px] hover:font-bold'
        >
          Prototype Link
        </Link>
        <Image src='/assets/high-fidelity.png' alt="Expert page wireframe" width={800} height={800}
          className='mt-[50px] md:w-[700px] lg:w-[800px] self-center'
        />
      </section>

      {/*Take aways */}

      <section>
        <h1 className='font-kanit text-[40px] md:text-[46px] lg:text-[52px] underline decoration-accent uppercase tracking-[8px] mt-[100px] '>
          Takeaways
        </h1>
        <div className='flex items-center justify-center lg:flex-row flex-col gap-8 w-full'>
          <p className='mt-[50px] text-[18px] md:text-[20px] lg:text-[22px] lg:w-2/5'>
            The app focuses on providing tools and means for art enthusiastics to pursure their passions and how it really thinks about its
            target users
          </p>
          <p className='md:mt-[20px] lg:mt-[50px] text-[22px] md:text-[28px] lg:text-[32px] font-kanit text-accent lg:w-3/5 italic'>
            “The app made art more fun. I would higly recommend this app to all those students who are doubting their artistic capabilities and
            rethinking about their career”
          </p>
        </div>

        <h4 className='uppercase text-[20px] md:text-[22px] lg:text-[24px] font-kanit font-bold tracking-[4px] mt-[100px]'>
          Future Steps
        </h4>
        <div className='grid lg:grid-cols-3 gird-cols-1 gap-5 lg:gap-10 mt-[50px]'>
          <div className='w-full bg-accent text-primary h-[250px] text-[20px] md:text-[22px] flex items-center justify-center p-4 
          rounded-lg md:text-center'>
            A new user usability study would be conducted to identify any pain points in the updated wireframe
          </div>
          <div className='w-full bg-accent text-primary h-[250px] text-[20px] md:text-[22px] flex items-center justify-center p-4 rounded-lg 
          md:text-center lg:mt-[30px]'>
            Interview sessions would be held to get a more detailed view about user experiences and issues to avoid further setbacks
          </div>
          <div className='w-full bg-accent text-primary h-[250px] text-[20px] md:text-[22px] flex items-center justify-center p-4 rounded-lg 
          md:text-center lg:mt-[60px]'>
            If there arent any issues, the design will be forwarded for development
          </div>
        </div>
      </section>

      {/*Footer */}
      <footer className='border-t-2 border-accent flex flex-col mt-[100px] items-center justify-center text-center'>
        <p className='text-[14px] md:text-[16px]'>
          If you would like to get in touch, feel free to get in touch. I will be looking forward to work with you
        </p>
        <span className='text-[14px] md:text-[16px] text-accent mt-[25px] lg:mt-[30px]'>
          @ All Rights Reserved to Mian Maaz Ullah Khan
        </span>
      </footer>
    </div>
  )
}

export default Home