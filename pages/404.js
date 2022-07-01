import styled from 'styled-components'

const Box = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display:flex;
  justify-content: center;
  align-items: center;
`

export default function Custom404() {
    return (
        <Box>
            <h1>404 - Page Not Found</h1>
        </Box>
    )
}