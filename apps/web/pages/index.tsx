// import { Button } from "ui";
import { useEffect, useState } from 'react'
import StyledJsxV1Button from 'xjsx/v1/Button'

export const LENGTH = 10
export const INITIAL_LENGTH = 0

export const Web = () => {
  const [length, setLength] = useState(INITIAL_LENGTH)
  const [width, setWidth] = useState(INITIAL_LENGTH)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerHeight)
      setLength(window.innerWidth / LENGTH)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // console.log(length)
  // console.log(width)
  return (
    <div>
      <h1>Web</h1>
      <StyledJsxV1Button type='button'>123</StyledJsxV1Button>
      <table>
        <tbody>
          {Array.from({ length }).map((_, trI) => (
            <tr
              key={`TR_${trI + 1}`}
              style={{
                fontSize: '12px',
                maxWidth: `${LENGTH}px`,
                minWidth: `${LENGTH}px`,
                minHeight: `${LENGTH}px`,
                maxHeight: `${LENGTH}px`,
                border: 0,
                overflow: 'hidden',
                backgroundColor: trI % 2 === 0 ? '#333' : '#666',
                color: '#fff'
              }}>
              {Array.from({ length }).map((__, tdI) => (
                <td
                  key={`TD_${tdI + 1}`}
                  style={{
                    fontSize: '12px',
                    maxWidth: `${LENGTH}px`,
                    minWidth: `${LENGTH}px`,
                    minHeight: `${LENGTH}px`,
                    maxHeight: `${LENGTH}px`,
                    border: 0,
                    overflow: 'hidden'
                  }}>
                  {trI}:{tdI}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Web
