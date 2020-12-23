import React from 'react'

import Subtitle from 'components/common/Subtitle'
import Title from 'components/common/Title'
import Topic from 'components/common/Topic'
import { EDUCATIONS, INTERNSHIPS } from 'utils/const'
import { Internship } from 'components/section/Internship'
import { Education } from 'components/section/Education'

export default function Index(): React.ReactElement {
  return (
    <div className='container mx-auto pt-8'>
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
    </div>
  )
}
