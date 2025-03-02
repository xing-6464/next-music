import { permanentRedirect as redirect } from 'next/navigation'

export default function AppPage() {
  redirect('/recommend')
}
