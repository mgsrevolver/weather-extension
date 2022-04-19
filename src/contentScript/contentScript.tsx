import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { Card } from '@material-ui/core'
import WeatherCard from '../components/WeatherCard'
import { getStoredOptions, LocalStorageOptions } from '../utils/storage'
import './contentScript.css'

const App: React.FC<{}> = () => {
  const [options, setOptions] = useState<LocalStorageOptions | null>(null)

  useEffect(() => {
    getStoredOptions().then((options) => setOptions(options))
  }, [])

  if (!options) {
    return null
  }

  return (
    <Card className="overlayCard">
      <WeatherCard city={options.homeCity} tempScale={options.tempScale} />
    </Card>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)
