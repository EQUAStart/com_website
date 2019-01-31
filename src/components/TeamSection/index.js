import React from 'react'
import TeamMember from '../TeamMember'

const TeamSection = ({teamMembers}) => {
  return (
    <div className='container'>
      {teamMembers.members
        .map( member => (
          <TeamMember member={member} />
        ))}
    </div>
  )
}

export default TeamSection
