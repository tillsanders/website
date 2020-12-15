import path from 'path'
import { Module } from '@nuxt/types'
import { PlausibleOptions } from 'plausible-tracker'

const PlausibleModule: Module<PlausibleOptions> = function (moduleOptions) {
  this.addPlugin({
    src: path.resolve(
      __dirname,
      '../node_modules/vue-plausible/lib/esm/nuxt-plugin.js'
    ),
    options: moduleOptions,
    ssr: false,
  })
}

export default PlausibleModule
