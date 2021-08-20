import { Component, useEffect } from 'react'
import Taro from '@tarojs/taro'
import './app.scss'

const App = ({ children }) => {
  useEffect(() => {
    Taro.checkSession({
      success () {
         const p = Taro.getUserProfile({desc: 'get user'});
      },
      fail () {
        console.log('2')
        Taro.login()
      }
    })
  },[])
  return children
}

export default App
