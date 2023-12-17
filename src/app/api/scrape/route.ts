import { NextRequest } from 'next/server'
import * as cheerio from 'cheerio'

export async function POST(request: NextRequest) {
  const { url } = await request.json()

  const res = await fetch(url)
  const html = await res.text()
  const $ = cheerio.load(html)
  
  console.log($)

  return new Response('Scrape completed', {
    headers: { 'Content-Type': 'text/plain' },
  })
}