import { Flex, Stack, Text } from '@chakra-ui/react'
import BannerText from '../atoms/Text/Banner'
import BorderRadiusPreviewer from '../organisms/BorderRadiusPreviewer'
import DefaultLayout from './DefaultLayout'

interface BorderRadiusTemplateProps {
  title: string
  subtitle: string
}

const BorderRadiusView = ({ title, subtitle }: BorderRadiusTemplateProps) => {
  return (
    <DefaultLayout>
      <Flex w="full" h="full" justifyContent="center" alignContent="center">
        <Stack spacing={3} alignItems="center">
          <BannerText>{title}</BannerText>
          <Text fontSize="xs">{subtitle}</Text>
          <BorderRadiusPreviewer />
        </Stack>
      </Flex>
    </DefaultLayout>
  )
}

export default BorderRadiusView
