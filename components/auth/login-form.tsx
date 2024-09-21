import React from "react"
import CardWrapper from "./card-wrapper"

const LoginForm = () => {
	return (
		<CardWrapper
			headerLabel="Welcome back"
			backButtonLabel="Don't Have an account?"
			backButtonHref="/auth/register"
			showSocial
		>
			Login Form!
		</CardWrapper>
	)
}

export default LoginForm
