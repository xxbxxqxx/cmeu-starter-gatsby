import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { createStyles, Header, Group, ActionIcon, Container } from '@mantine/core';
import { IconBrandTwitter, IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 20,
    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
    },
  },

  links: {
    width: 260,
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  logo: {
    textDecoration: 'none',
    'span': {
      padding: '0 10px',
      lineHeight: '45px',
      fontSize: '1.2rem',
    }
  },
}));

const commonHeader = () => {
  const { classes, cx } = useStyles();

  return (
    <Header height="auto" mb={80}>
      <Container className={classes.inner} size="xl">

        <Link to="/" className={classes.logo} >
          <StaticImage
            src="../images/cm-logo.png"
            height={45}
            alt="Classmethod"
          />
          <span>×</span>
          <StaticImage
            src="../images/contentful-logo.png"
            height={45}
            alt="Contentful"
          />
        </Link>
        
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <a href="/" className={classes.link}>
            <ActionIcon>
              <IconBrandTwitter size={24} />
            </ActionIcon>
          </a>
          <a href="https://www.facebook.com/classmethod.de/" className={classes.link}>
            <ActionIcon>
              <IconBrandFacebook size={24} />
            </ActionIcon>
          </a>
          <a href="/" className={classes.link}>
            <ActionIcon>
              <IconBrandInstagram size={24} />
            </ActionIcon>
          </a>
          <a href="/" className={classes.link}>
            <ActionIcon>
              <IconBrandLinkedin size={24} />
            </ActionIcon>
          </a>
        </Group>
      </Container>
    </Header>
  );
}

export default commonHeader