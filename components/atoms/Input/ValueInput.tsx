import { Input, InputProps } from '@chakra-ui/react'
import React from 'react'

const ValueInput = React.forwardRef((props: InputProps, ref: any) => {
  return (
    <Input
      ref={ref}
      type="text"
      background="transparent"
      position="absolute"
      htmlSize={4}
      width="auto"
      {...props}
    />
  )
})

ValueInput.displayName = 'ValueInput'
export default ValueInput
