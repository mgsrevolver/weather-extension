import React from 'react'
import ReactDOM from 'react-dom'
import { Card } from '@material-ui/core'
import WeatherCard from '../components/WeatherCard'
import './contentScript.css'

const App: React.FC<{}> = () => {
  return (
    <Card className="overlayCard">
      <WeatherCard city="New York" tempScale="imperial" />
    </Card>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)
