import { useState } from 'react'
import Router from 'next/router'
import { useUser } from '../lib/hooks'
import Layout from '../components/layout'
import Form from '../components/form'
// import { Link } from 'react-router-dom'
import styles from '@/styles/Home.module.css'

import Link from 'next/link'

const Login = () => {
  useUser({ redirectTo: '/', redirectIfFound: true })

  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    if (errorMsg) setErrorMsg('')

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    }

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (res.status === 200) {
        Router.push('/')
      } else {
        throw new Error(await res.text())
      }
    } catch (error) {
      console.error('An unexpected error happened occurred:', error)
      setErrorMsg(error.message)
    }
  }

  return (

      <div className={styles.main}>
        {/* <Form isLogin errorMessage={errorMsg} onSubmit={handleSubmit} /> */}
        <form  className="space-y-5 mt-8 ">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <div class="mt-1">
          <input
            id="email"
            name="username"
            type="email"
            autocomplete="email"
            required=""
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            fdprocessedid="zz2q9o"
          />
        </div>
      </div>
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div class="mt-1">
          <input
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            // required=""
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            // fdprocessedid="ei01nl"
          />
        </div>
      </div>

      <button
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          fdprocessedid="aqzbpypj"
        >
          login 
        </button>
     
      {/* <Link>felkn</Link> */}

      <Link href="/signup">new user?  </Link>
      </form>
      </div>
      
  )
}

export default Login
