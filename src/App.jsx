import { RouterProvider } from "react-router"
import { router } from "./routes/AppRouter"
import ActionPrvider from "./context/actioncontext/ActionProvider"



function App() {
  return (

    <ActionPrvider>
      <RouterProvider router={router} />
    </ActionPrvider>

  )
}

export default App
