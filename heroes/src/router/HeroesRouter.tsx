import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Home } from '../components/feature/heroes'

export const HeroesRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' Component={Home}></Route>
        </Routes>
    </BrowserRouter>
  )
}
