import { HeaderProvider } from "./contexts/HeaderProvider"
import { Home } from "./pages/home"

export const App = () => {
  return (
    <HeaderProvider>
      <Home />
    </HeaderProvider>
  )
}
