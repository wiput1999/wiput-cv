import React from 'react'

import Paragraph from 'components/common/Paragraph'
import { IAward } from 'utils/const'

export const Award = ({
  name,
  prize,
  description,
}: IAward): React.ReactElement => {
  return (
    <div className='pb-4 pl-8'>
      <Paragraph>{name}</Paragraph>
      <Paragraph color='gray'>{prize}</Paragraph>
      {description && <Paragraph color='gray'>{description}</Paragraph>}
    </div>
  )
}
