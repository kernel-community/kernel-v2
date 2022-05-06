/* eslint-disable no-useless-escape */
import { Link, Text } from 'theme-ui'
import Emojis from './emojis'
import React from 'react'

const config = [
  {
    regex: /(http|https):\/\/(\S+)\.([a-z]{2,}?)(.*?)( |\,|$|\.)/gim,
    fn: (key, result) => (
      <span key={key}>
        <Link
          target="_blank"
          href={`${result[1]}://${result[2]}.${result[3]}${result[4]}`}
          rel="noreferrer">
          {result[2]}.{result[3]}
          {result[4]}
        </Link>
        {result[5]}
      </span>
    ),
  },
  {
    regex: /(\S+)\.([a-z]{2,}?)(.*?)( |\,|$|\.)/gim,
    fn: (key, result) => (
      <span key={key}>
        <Link
          target="_blank"
          href={`http://${result[1]}.${result[2]}${result[3]}`}
          rel="noreferrer">
          {result[1]}.{result[2]}
          {result[3]}
        </Link>
        {result[4]}
      </span>
    ),
  },
  {
    regex: /\@([a-z0-9_\-]+?)( |\,|$|\.)/gim,
    fn: (key, result) => (
      <Text key={key} sx={{ color: 'kernelGreen', fontWeight: '600' }}>
        {result[0]}
      </Text>
    ),
  },
  {
    regex: /:[^:\s]*(?:::[^:\s]*)*:/gim,
    fn: (key, result) => (
      <span key={key}>{Emojis[result[0].replaceAll(':', '')]} </span>
    ),
  },
]

export default config
