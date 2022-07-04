import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Head from '../components/head';

export default function Home() {
  const router = useRouter();
  const { data: session, status: loading } = useSession();

  // ロード中
  if (loading === 'loading') {
    return <div>Loading...</div>
  }

  if (session) {

    router.push("/innerscan/daily");
    return null;
  }

  return (
    <>
      <Head
        title={'Next Body Composition'}
      />
      <h1 className='text-gray-600'>Next Body Composition</h1>
      <button className='px-2 py-1 bg-blue-400 text-white font-semibold rounded hover:bg-blue-500' onClick={() => signIn()}>Sign in</button>
      <button className='px-2 py-1 bg-orange-400 text-white font-semibold rounded hover:bg-orange-500' onClick={() => router.push("/user/register")}><a>新規登録</a></button>
    </>
  )
}