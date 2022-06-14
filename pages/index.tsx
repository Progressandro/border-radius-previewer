import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import type { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import BorderRadiusView from 'components/templates/BorderRadiusView'

const Home: NextPage = () => {
  const { t: indexTranslations } = useTranslation('index')
  return (
    <BorderRadiusView
      title={indexTranslations('title')}
      subtitle={indexTranslations('subtitle')}
    />
  )
}

export async function getStaticProps({
  locale,
}: GetStaticProps & { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'index'])),
      // Will be passed to the page component as props
    },
  }
}

export default Home
