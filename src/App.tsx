import React, { useState } from 'react'
import ColorSelector from '@components/ColorSelector/ColorSelector'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

interface Color {
  red: number
  green: number
  blue: number
}

const App: React.FC = () => {
  const [colors, setColors] = useState<Color[]>([
    { red: 0, green: 0, blue: 0 },
    { red: 0, green: 0, blue: 0 },
    { red: 0, green: 0, blue: 0 },
    { red: 0, green: 0, blue: 0 },
    { red: 0, green: 0, blue: 0 },
  ])

  const handleColorChange = (index: number, color: Color) => {
    const newColors = [...colors]
    newColors[index] = color
    setColors(newColors)
  }

  return (
    <div className='container'>
      <h1 className='text-center my-4'>HueMatch</h1>
      <div className='row'>
        {colors.map((color, index) => (
          <div className='col-md-3 mb-4' key={index}>
            <ColorSelector index={index} color={color} onColorChange={handleColorChange} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
