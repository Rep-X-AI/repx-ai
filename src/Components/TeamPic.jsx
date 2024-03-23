import React from 'react'

const TeamPic = ({ name, designation, photo, link }) => {
  return (
    <figure class="teams-card">
      <div class="profile-image-2">
        <a href={link} rel='noreferrer'>
          <img src={`/${photo}.webp`} alt="Rishi Bhattasali" />
        </a>
      </div>
      <figcaption>
        <h3 className='text-center text-xl font-bold text-zinc-900 dark:text-zinc-100'>{name}</h3>
        <h4 className='mt-2 text-center text-sm leading-relaxed text-zinc-600 dark:text-zinc-500'>{designation}</h4>
      </figcaption>
    </figure>
  )
}

export default TeamPic