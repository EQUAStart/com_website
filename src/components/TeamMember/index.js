import React from 'react'

const TeamMember = ({member}) => {
  return (
    <div class="card">
      <div class="card-image">
        <figure class="image is-5by7">
          <img src={member.picture} alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-3">{member.fullName}</p>
          </div>
        </div>

        <div class="content">
          {member.bio}
        </div>
      </div>
    </div>
  )
}

export default TeamMember
