import React from 'react'

import Subtitle from 'components/common/Subtitle'
import Title from 'components/common/Title'
import Topic from 'components/common/Topic'
import {
  ACTIVITIES,
  AWARDS,
  EDUCATIONS,
  INTERNSHIPS,
  FEATUREDPROJECTS,
  SKILLS,
} from 'utils/const'
import { Internship } from 'components/section/Internship'
import { Education } from 'components/section/Education'
import { Award } from 'components/section/Award'
import { Activity } from 'components/section/Activity'
import { FeaturedProject } from 'components/section/FeaturedProject'

export default function Index(): React.ReactElement {
  return (
    <div className='container mx-auto max-w-5xl py-8'>
      <Title>Wiput Pootong</Title>
      <Subtitle>
        Senior Student at Faculty of Information Technology, KMITL
      </Subtitle>
      <Subtitle>Backend Developer</Subtitle>
      <Topic>Internships</Topic>
      {INTERNSHIPS.map(data => (
        <Internship key={data.company} {...data} />
      ))}
      <Topic>Educations</Topic>
      {EDUCATIONS.map(data => (
        <Education key={data.institite} {...data} />
      ))}
      <Topic>Awards</Topic>
      {AWARDS.map(data => (
        <Award key={data.name} {...data} />
      ))}
      <Topic>Extra-curricular Activities</Topic>
      {ACTIVITIES.map(data => (
        <Activity key={data.name} {...data} />
      ))}
      <Topic>Featured Projects</Topic>
      {FEATUREDPROJECTS.map(data => (
        <FeaturedProject key={data.name} {...data} />
      ))}
      <Topic>Skills</Topic>
      <div className='grid grid-cols-4'>
        {SKILLS.map(data => (
          <div className='py-2 text-center' key={data}>
            {data}
          </div>
        ))}
      </div>
    </div>
  )
}
