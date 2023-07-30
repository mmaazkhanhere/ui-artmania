import Image from 'next/image'
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
        <h4 className='uppercase text-[20px] font-kanit font-bold tracking-[4px] mt-[50px]'>Research Goals</h4>

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
        <h4 className='uppercase text-[20px] font-kanit font-bold tracking-[4px] mt-[100px]'>Pain points indentified</h4>
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
      <section className='flex flex-col items-end justify-center'>
        <h1 className='font-kanit text-[52px] underline decoration-accent uppercase tracking-[8px] mt-[100px] '>
          Design Process
        </h1>
        {/*userflow */}
        <p className='mt-[100px] font-bold font-kanit text-[22px] text-right'>
          I created a user flow of how the user will navigate through the app and complete their desired activity. The task was to use
          ArtMania app to have access to resource to advance art career.
        </p>
        <Image src='/assets/userflow.png' alt="User Flow" width={800} height={800} className='mt-[50px]' />

        {/*paper wireframe */}
        <h4 className='uppercase text-[20px] font-kanit font-bold tracking-[4px] mt-[100px]'>
          Paper Wireframes
        </h4>
        <p className='mt-[50px] text-[22px] text-right'>
          The goal of creating a paper wireframe for the homepage of an art studio app that offers an art eBook collection and expert consultation
          is to establish a clear and user-friendly interface that effectively communicates the apps features and benefits
        </p>
        <Image src='/assets/paperwireFrame.jpg' alt="Paper wireframe" width={800} height={800} className='mt-[50px]' />

        {/*digital wireframe */}
        <h4 className='uppercase text-[20px] font-kanit font-bold tracking-[4px] mt-[100px]'>
          Digital Wireframes
        </h4>
        <p className='mt-[50px] text-[22px] text-right'>
          After selecting the best possible design to offer better user experience, I created a digital wireframe using Figma.
        </p>
        <Image src='/assets/paperwireFrame.jpg' alt="Paper wireframe" width={800} height={800} className='mt-[50px]' />
      </section>
    </div>
  )
}

export default Home