import React from 'react'

const AdvisorSection = () => {
  const image2 = 'https://picsum.photos/800/500'
  return (
    <div className="bg-base-100 p-6 items-center rounded-lg  flex flex-col">
      {/* Image Section */}
      <div className="flex items-center justify-center w-full">
        <img
          src={image2}
          alt="Founder"
          className="w-full h-auto max-w-xs md:max-w-md lg:max-w-lg object-cover rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="prose text-center mt-4 w-full">
        <h2 className="text-3xl font-bold">PR/Social Media Manager </h2>
        <p className="text-base mt-4">
          jordan (aka euterpe), is a 17-year-old from the united states! when it
          comes to music, she loves taylor swift, conan gray, olivia rodrigo,
          and sabrina carpenter. activity-wise, she loves reading and watching
          youtube documentaries (her favorites are dangelo wallace and
          filmcooper!). she is currently reading the novel persuasion by jane
          austen, but her favorite book (series) has to be a good girl's guide
          to murder. however, the thing that she loves the most her four cats
          due to how fluffy they are. she is so glad to be apart of this team,
          and is excited to watch darpan grow{' '}
        </p>
      </div>
    </div>
  )
}

export default AdvisorSection
