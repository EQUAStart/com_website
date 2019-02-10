import React from 'react'

const TeamMember = ({member}) => {
  return (
    <div className="card" >
      <div className="card-image">
        <figure className="image is-5by7">
          <img src={member.picture} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-3">{member.fullName}</p>
          </div>
        </div>

        <div className="content">
          {member.bio}
        </div>
      </div>
    </div>
  )
}

export default TeamMember
