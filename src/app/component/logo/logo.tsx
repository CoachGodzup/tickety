import { Pacifico } from 'next/font/google'

export const pacifico = Pacifico({
  weight: '400',
  display: 'swap',
})

export const Logo = () => (
  <h3 style={{ paddingLeft: '1em' }} className={pacifico.className}>
    Tickety
  </h3>
)
