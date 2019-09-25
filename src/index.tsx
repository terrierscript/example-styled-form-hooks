import React from "react"
import { render } from "react-dom"
import useForm from "react-hook-form"
import { Input, Button } from "@storybook/design-system"

const App = () => {
  const { register, handleSubmit } = useForm()
  return (
    <div>
      hello
      <form
        onSubmit={handleSubmit((e) => {
          console.log(e)
        })}
      >
        <Input name="title" ref={register({ required: true })}></Input>
        {/* <Button>send</Button> */}
      </form>
    </div>
  )
}

render(<App />, document.querySelector("#root"))
