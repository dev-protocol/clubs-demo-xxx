import {
  ClubsFunctionGetAdminPaths,
  ClubsFunctionGetPagePaths,
  ClubsFunctionPlugin,
} from '@devprotocol/clubs-core'
import { default as Index } from './index.astro'

export const getPagePaths: ClubsFunctionGetPagePaths = async () => []

export const getAdminPaths: ClubsFunctionGetAdminPaths = async (
  _,
  { name, description, twitterHandle, propertyAddress }
) => [
  {
    paths: [''],
    component: Index,
    props: { name, description, twitterHandle, propertyAddress },
  },
]

export default {
  getPagePaths,
  getAdminPaths,
} as ClubsFunctionPlugin
