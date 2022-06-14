import { Box } from '@chakra-ui/react'
import ValueInput from 'components/atoms/Input/ValueInput'
import { useState } from 'react'

interface RadiusState {
  topLeft: string | number
  topRight: string | number
  bottomLeft: string | number
  bottomRight: string | number
}
const BorderRadiusPreviewer = () => {
  const [radiusState, setRadiusState] = useState<RadiusState>({
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0,
  })

  return (
    <Box position="relative">
      <ValueInput
        id="topLeft"
        left={-100}
        value={radiusState.topLeft}
        onChange={(e) => {
          setRadiusState({
            ...radiusState,
            topLeft: e.target.value,
          })
        }}
      />
      <ValueInput
        right={-100}
        value={radiusState.topRight}
        onChange={(e) => {
          setRadiusState({
            ...radiusState,
            topRight: e.target.value,
          })
        }}
      />
      <ValueInput
        left={-100}
        bottom={0}
        value={radiusState.bottomLeft}
        onChange={(e) => {
          setRadiusState({
            ...radiusState,
            bottomLeft: e.target.value,
          })
        }}
      />
      <ValueInput
        right={-100}
        bottom={0}
        value={radiusState.bottomRight}
        onChange={(e) => {
          setRadiusState({
            ...radiusState,
            bottomRight: e.target.value,
          })
        }}
      />
      <Box
        w={400}
        h={400}
        bg="green.100"
        borderTopLeftRadius={radiusState.topLeft}
        borderTopRightRadius={radiusState.topRight}
        borderBottomLeftRadius={radiusState.bottomLeft}
        borderBottomRightRadius={radiusState.bottomRight}
      />
    </Box>
  )
}

export default BorderRadiusPreviewer
