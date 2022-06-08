import { Flex, Stack, Text } from '@chakra-ui/react'
import BannerText from '../atoms/Text/Banner'

interface BorderRadiusTemplateProps {
  title: string
  subtitle: string
}

const BorderRadiusTemplate = ({
  title,
  subtitle,
}: BorderRadiusTemplateProps) => {
  return (
    <Flex w="full" h="full" justifyContent="center" alignContent="center">
      <Stack spacing={3} alignItems="center">
        <BannerText>{title}</BannerText>
        <Text fontSize="xs">{subtitle}</Text>
      </Stack>
    </Flex>
  )
}

export default BorderRadiusTemplate
