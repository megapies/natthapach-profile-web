import path from 'path'
import fs from 'fs'
import {ImprovedProfileWebsite} from "@/components/improved-profile-website"
import Head from "next/head"

export default function Profile() {
  return (
    <>
      <Head>
        <title>Natthapach Anuwattananon</title>
        <meta name="description" content="Technology Leader and Innovator." />
        <meta property="og:title" content="Natthapach.com" />
        <meta property="og:description" content="Technology Leader and Innovator" />
        <meta property="og:image" content="/link-cover.jpeg" />
      </Head>
      <ImprovedProfileWebsite/>
    </>
  )
}