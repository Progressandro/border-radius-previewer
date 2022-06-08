import BorderRadiusTemplate from '@/components/templates/BorderRadius'
import DefaultLayout from '@/components/templates/DefaultLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import type { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'

const Home: NextPage = () => {
  const { t: indexTranslations } = useTranslation('index')
  return (
    <DefaultLayout>
      <BorderRadiusTemplate
        title={indexTranslations('title')}
        subtitle={indexTranslations('subtitle')}
      />
    </DefaultLayout>
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
