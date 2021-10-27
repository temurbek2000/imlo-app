import HomePage from "../pages/home/home";
import WordSearch from "../pages/wordsearch/worsearch";
import LoginComponent from "../pages/login/login";

export const routes=[
    {
        path:'/home',
        component: HomePage,
    },
    {
        path:'/search',
        component: WordSearch,
    },
    {
        path:'/login',
        component: LoginComponent,
    },
]