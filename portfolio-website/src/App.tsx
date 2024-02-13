import { AppProviders } from "@contexts/AppProviders"
import { Home } from "@pages/home/Home"

export const App = () => {
  return (
    <AppProviders>
      <Home />
    </AppProviders>
  )
}
