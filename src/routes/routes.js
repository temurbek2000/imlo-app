import HomePage from "../pages/home/home";
import WordSearch from "../pages/wordsearch/worsearch";
import LoginComponent from "../pages/auth/login/login";
import RandomWord from "../pages/random/random";
import StatisticComponent from "../pages/statistics/statistics";
import ModeratorHome from "../pages/moderators/moderatorHome";
import WordAdd from "../pages/moderators/wordAdd/wordAdd";
import SignUpComponent from "../pages/auth/signUp/signUp";

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
    {
        path:'/sign-up',
        component: SignUpComponent,
    },
    {
        path:'/statistics',
        component: StatisticComponent,
    },
    {
        path:'/random',
        component: RandomWord,
    },
    {
        path:'/moderator',
        component: ModeratorHome,
    },
    {
        path:'/word-add',
        component: WordAdd,
    },
]