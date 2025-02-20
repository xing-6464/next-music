import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    additionalData: `@import "./src/assets/scss/variable.scss"; @import "./src/assets/scss/mixin.scss";`,
  },
}

export default nextConfig
