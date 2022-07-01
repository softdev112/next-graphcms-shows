import Layout from '@c/Layout'
import { Grid, Card } from '@c/Grid'
import styled from 'styled-components'
import { Title, SubTitle } from '@c/Title'

const Box = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
  display:flex;
  flex-direction:column;
`

export default function Home() {
  return (
    <Layout title="next-graphcms-shows / Home" maxWidth="800px">
      <Title>next-graphcms-shows</Title>

      <SubTitle>
        A Next.js application for displaying fictional live events retrieved from GraphCMS
      </SubTitle>

      <Box>
        <Card href="/readme" header="README">
          <p>Check the README for details on how to work on this project.</p>
        </Card>
        <Card href="/shows" header="Shows">
          <p>A listing of shows pulled from the mock data GraphQL store.</p>
        </Card>
        <Card href="/schemas" header="Schemas">
          <p>View the full schemas for data stored in the GraphCMS database.</p>
        </Card>
      </Box>
    </Layout>
  )
}
