import SignupFormDemo from '@/app/(root)/components/signin'
import { getLoggedInUser } from '@/lib/server/users.actions';
import { redirect } from 'next/navigation';
import React from 'react'

const SignIn = async () => {
  const user = await getLoggedInUser();
  //console.log(user);
  if (user) redirect("/homepage")
  return (
    <>
      <SignupFormDemo/>
    </>
  )
}

export default SignIn
