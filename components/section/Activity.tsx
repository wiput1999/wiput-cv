import React from 'react'

import Paragraph from 'components/common/Paragraph'
import Card from 'components/common/Card'
import { IActivity } from 'utils/const'
import Link from 'components/common/Link'

export const Activity = ({
  name,
  link,
  role,
  from,
  to,
}: IActivity): React.ReactElement => {
  return (
    <Card>
      <Link link={link}>{name}</Link>
      <Paragraph color='gray'>
        {role} | {from} - {to}
      </Paragraph>
    </Card>
  )
}
