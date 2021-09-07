import { OAuthExtension } from '@magic-ext/oauth'
import { Magic } from 'magic-sdk'

const magic = new Magic('pk_live_B529CA1B7D93ABE8', {
  extensions: [new OAuthExtension()],
})

await magic,
  oauth.loginWithRedirect({
    provider: ('discord', 'twitch'),
    redirectURI:
      'https://auth.magic.link/v1/oauth2/k-9jiue3DCxv2BIprQZ2YbN3xwY5XskFYO46UGFcf0M=/callback',
    scope: ['user:email'],
  })

const result = await magic.oauth.getRedirectResult()

export default function Guildform() {
  return <></>
}
