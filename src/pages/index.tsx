import Head from 'next/head';
import TwitterLogin from '@/src/components/twitterLogin';
import MisskeyLogin from '@/src/components/misskeyLogin';
import PostForm from '@/src/components/postForm';
import {
  Box,
  Container,
  Paper,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { theme } from './_app';

const Home = () => {
  return (
    <>
      <Head>
        <title>CaffeBruncher</title>
        <meta
          name='description'
          content='CaffeBruncher is tools to post to Twitter and Misskey at the same time.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Box
        component='div'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant='h1'
          align='center'
          sx={{
            fontWeight: '700',
            m: 8,
            fontSize: { xs: '3rem', md: '6rem' },
          }}
        >
          CaffeBruncher
        </Typography>

        <Container
          component='main'
          maxWidth={
            useMediaQuery(() => theme.breakpoints.up('md')) ? 'md' : 'lg'
          }
          sx={{ mb: 5, px: { xs: 1, md: 'auto' } }}
        >
          <Paper sx={{ px: { xs: 2, md: 5 }, py: 2.5 }}>
            <PostForm />
          </Paper>
        </Container>

        <Box
          sx={{
            p: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
            }}
          >
            <Box sx={{ px: 3, py: { xs: 3, md: 0 } }}>
              <TwitterLogin />
            </Box>
            <Box
              sx={{
                px: 3,
                mb: { xs: 2, md: 'auto' },
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
              }}
            >
              <MisskeyLogin />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;