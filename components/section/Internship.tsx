import React from 'react'

import Paragraph from 'components/common/Paragraph'
import { IInternship } from 'utils/const'

export const Internship = ({
  company,
  role,
  from,
  to,
}: IInternship): React.ReactElement => {
  return (
    <div className='pb-2 pl-8'>
      <Paragraph>{company}</Paragraph>
      <Paragraph color='gray'>
        {role} | {from} - {to}
      </Paragraph>
    </div>
  )
}
