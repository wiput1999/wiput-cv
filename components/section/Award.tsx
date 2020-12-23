import React from 'react'

import Paragraph from 'components/common/Paragraph'
import Card from 'components/common/Card'
import { IAward } from 'utils/const'

export const Award = ({
  name,
  prize,
  description,
}: IAward): React.ReactElement => {
  return (
    <Card>
      <Paragraph>{name}</Paragraph>
      <Paragraph color='gray'>{prize}</Paragraph>
      {description && <Paragraph color='gray'>{description}</Paragraph>}
    </Card>
  )
}
