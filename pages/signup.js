import { useState } from 'react'
import Router from 'next/router'
import { useUser } from '../lib/hooks'
import Layout from '../components/layout'
const Signup = () => {
  useUser({ redirectTo: '/', redirectIfFound: true })

  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    if (errorMsg) setErrorMsg('')

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    }

    if (body.password !== e.currentTarget.rpassword.value) {
      setErrorMsg(`The passwords don't match`)
      return
    }

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (res.status === 200) {

        // Router.push({
        //   path:'/addDetails',
        //   query:{email:body.username}
        //     })
        Router.push(`/addDetails/?email=${body.username}`)

      } else {
        throw new Error(await res.text())
      }
    } catch (error) {
      console.error('An unexpected error happened occurred:', error)
      setErrorMsg(error.message)
    }
  }

  return (
    <>
      <img
          className="absolute"
          src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.home_page_bg_desktop.png-26-4770753d59b970e1.png"
          alt=""
        />
            <main className="z-30 relative pt-28">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div class="sm:mx-auto sm:w-full sm:max-w-md">
              
              <h2 class="text-center text-2xl font-bold text-gray-900">
                Sign up to your account
              </h2>
            </div>
            <form class="space-y-5 mt-8 " method='POST' onSubmit={handleSubmit}>
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                >
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
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div class="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required=""
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    fdprocessedid="ei01nl"
                  />
                </div>
              </div>
              <div>
                <label
                  for="confirm-password"
                  class="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div class="mt-1">
                  <input
                    id="confirm-password"
                    name="rpassword"
                    type="password"
                    autocomplete="current-password"
                    required=""
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    fdprocessedid="h9sjiud"
                  />
                </div>
              </div>
              <div class="text-sm">
                <span>Already a user? </span>
                <a
                  class="hover:text-gray-900 hover:underline"
                  href="/auth/login"
                >
                  Log in
                </a>
              </div>
              <div>
                <button
                  type="submit"
                  class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  fdprocessedid="aqzbpypj"
                >
                  Sign up
                </button>
              </div>

              <p className='text-red-500'>{errorMsg}</p>
            </form>
          </div>
        </div>
      </main>
      
    </>

  )
}

export default Signup
