import Home from '../pages/Home'
import Shared from '../pages/Shared'
import Featured from '../pages/Featured'
import About from '../pages/About'
import GettingStarted from '../pages/GettingStarted'

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
    },
    {
      path: "/shared",
      component: Shared,
      name: "Shared Recipes",
    },
    {
      path: "/About",
      component: About,
      name: "About Sourdough",
    },
    {
      path: "/featured",
      component: Featured,
      name: "Featured Recipes",
    },
    {
      path: "/gettingstarted",
      component: GettingStarted,
      name: "Getting Started",
    }
];

export default routes