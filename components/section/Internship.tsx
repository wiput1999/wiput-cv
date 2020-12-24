import React from 'react'

import Paragraph from 'components/common/Paragraph'
import Card from 'components/common/Card'
import { IInternship } from 'utils/const'

export const Internship = ({
  company,
  role,
  from,
  to,
}: IInternship): React.ReactElement => {
  return (
    <Card>
      <Paragraph>{company}</Paragraph>
      <Paragraph color='gray'>
        {role} | {from} - {to}
      </Paragraph>
    </Card>
  )
}
