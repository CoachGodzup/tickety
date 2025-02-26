import { Pacifico } from 'next/font/google'

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

export function Logo() {
  return (
    <h3 style={{ paddingLeft: '1em' }} className={pacifico.className}>
      Tickety
    </h3>
  )
}
