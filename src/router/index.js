import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import blog from "../views/blog";
import support from "../views/support";
import myGit from "../views/myGit";
import pricing from "../views/pricing";
import notFound404 from "../views/notFound404";
import profile from "../views/profile";
import search from "../views/search";
import settings from "../views/myGit-settings"
import vaskoMijatovicProfile from "../views/vaskoMijatovicProfile";
import inbox from "../views/inbox";
import contacts from "../views/contacts";
import beogradNaVodi from "../views/beogradNaVodi";
import noviRepozitorijum from "../views/noviRepozitorijum";


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
     path:'/blog',
     name: 'blog',
     component: blog
    },
    {
      path:'/support',
      name: 'support',
      component: support
    },
    {
      path:'/search',
      name:'search',
      component: search
    },
    {
      path:'/profile',
      name:'profile',
      component: profile
    },
    {
      path:'/inbox',
      name:'inbox',
      component: inbox
    },
    {
      path:'/contacts',
      name:'contacts',
      component: contacts
    },
    {
      path:'/vaskoMijatovicProfil',
      name:'vaskoMijatovicProfil',
      component: vaskoMijatovicProfile
    },
    {
      path:'/my-git',
      name: 'myGit',
      component: myGit
    },
    {
      path:'/my-git/beograd-na-vodi',
      name: 'beogradNaVodi',
      component: beogradNaVodi
    },
    {
      path:'/my-git/novi-repozitorijum',
      name: 'noviRepozitorijum',
      component: noviRepozitorijum
    },
    {
      path:'/pricing',
      name: 'pricing',
      component: pricing
    },
    {
      path:'/my-git/settings',
      name: 'settings',
      component: settings
    },
    {
      path:'*',
      name: 'notFound',
      component: notFound404
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
