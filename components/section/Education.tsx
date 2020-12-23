import React from 'react'

import Paragraph from 'components/common/Paragraph'
import { IEducation } from 'utils/const'

export const Education = ({
  degree,
  institite,
  from,
  to,
}: IEducation): React.ReactElement => {
  return (
    <div className='pb-2'>
      <Paragraph>{institite}</Paragraph>
      <Paragraph color='gray'>
        {degree} | {from} - {to}
      </Paragraph>
    </div>
  )
}
