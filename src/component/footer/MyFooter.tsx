import Link from 'next/link'

export const MyFooter: React.FC = () => (
  <p>
    Created with 🐾 by{' '}
    <Link
      style={{ textDecoration: 'none', color: '#eee', fontWeight: 'b' }}
      href="https://github.com/CoachGodzup"
      rel="noreferrer noopener"
      target="_blank"
    >
      CoachGodzup
    </Link>
  </p>
)
