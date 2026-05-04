import { act } from 'react'
import { createRoot } from 'react-dom/client'
import { expect, test } from 'vitest'

import { App } from './app'

test('renders App into the DOM', () => {
    const root = document.createElement('div')
    document.body.appendChild(root)

    act(() => {
        createRoot(root).render(<App />)
    })

    expect(root.innerHTML).not.toBe('')
})
