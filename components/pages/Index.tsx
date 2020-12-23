import React from 'react'

import Subtitle from 'components/common/Subtitle'
import Title from 'components/common/Title'
import Topic from 'components/common/Topic'

export default function Index(): React.ReactElement {
  return (
    <div className='container mx-auto pt-8'>
      <Title>Wiput Pootong</Title>
      <Subtitle>
        Senior Student at Faculty of Information Technology, KMITL
      </Subtitle>
      <Subtitle>Backend Developer</Subtitle>
      <Topic>Internships</Topic>
    </div>
  )
}
