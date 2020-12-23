import React from 'react'

import Paragraph from 'components/common/Paragraph'
import Card from 'components/common/Card'
import { IEducation } from 'utils/const'

export const Education = ({
  degree,
  institite,
  from,
  to,
}: IEducation): React.ReactElement => {
  return (
    <Card>
      <Paragraph>{institite}</Paragraph>
      <Paragraph color='gray'>
        {degree} | {from} - {to}
      </Paragraph>
    </Card>
  )
}
