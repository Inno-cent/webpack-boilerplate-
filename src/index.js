// Testing import of a JavaScript module
import { test } from '@/js/test'

// Testing the import of an asset
import webpackLogo from '@/images/webpack-logo.svg'

// Testing import of styles
import '@/styles/index.scss'

// Appending to the DOM
const logo = document.createElement('img')
logo.src = webpackLogo

const heading = document.createElement('h1')
heading.textContent = test()

// Testing a background image url in CSS
const imageBackground = document.createElement('div')
imageBackground.classList.add('image')

// Testing a public folder asset
const imagePublic = document.createElement('img')
imagePublic.src = '/assets/example.png'

const app = document.querySelector('#root')
app.append(logo, heading, imageBackground, imagePublic)
