import * as React from "react"
import { MantineProvider, createStyles } from '@mantine/core';
import Header from '../components/Header'

type LayoutProps = {
  children: React.ReactNode
}

const useStyles = createStyles(() => ({
  main: {
    fontFamily: 'Verdana, sans-serif',
  },
}));

const Layout = ({ children }: LayoutProps) => {
  const { classes } = useStyles();

  return (
    <MantineProvider
      theme={{
        fontFamily: 'Verdana, sans-serif',
        fontFamilyMonospace: 'Monaco, Courier, monospace',
        headings: { fontFamily: 'Greycliff CF, sans-serif' }
      }}
    >
      <Header />
      <main className={classes.main}>{children}</main>
    </MantineProvider>
  )
}

export default Layout
