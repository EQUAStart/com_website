import React from 'react'
import TeamMember from '../TeamMember'

const TeamSection = ({teamMembers}) => {
  return (
    <div className='container'>
      <div className="columns is-multiline is-centered">
      {teamMembers.members
        .map( member => (
          <div className="column is-one-quarter">
            <TeamMember member={member} />
          </div>
          ))}
      </div>
    </div>
  )
}

export default TeamSection
