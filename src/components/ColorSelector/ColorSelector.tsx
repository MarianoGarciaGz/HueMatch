import React from 'react'
import '@components/ColorSelector/ColorSelector.css'

interface ColorSelectorProps {
  index: number
  color: {
    red: number
    green: number
    blue: number
  }
  onColorChange: (index: number, color: { red: number; green: number; blue: number }) => void
}

const ColorSelector: React.FC<ColorSelectorProps> = ({ index, color, onColorChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    onColorChange(index, { ...color, [name]: Number(value) })
  }

  const { red, green, blue } = color

  return (
    <div className='card'>
      <div className='card-body'>
        <div className='color-display mb-3' style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}></div>
        <div className='input-group mb-3'>
          <input className='form-range' type='range' min='0' max='255' name='red' value={red} onChange={handleChange} />
          <input className='form-control ms-3' type='number' min='0' max='255' name='red' value={red} onChange={handleChange} />
        </div>
        <div className='input-group mb-3'>
          <input className='form-range' type='range' min='0' max='255' name='green' value={green} onChange={handleChange} />
          <input className='form-control ms-3' type='number' min='0' max='255' name='green' value={green} onChange={handleChange} />
        </div>
        <div className='input-group'>
          <input className='form-range' type='range' min='0' max='255' name='blue' value={blue} onChange={handleChange} />
          <input className='form-control ms-3' type='number' min='0' max='255' name='blue' value={blue} onChange={handleChange} />
        </div>
      </div>
    </div>
  )
}

export default ColorSelector
