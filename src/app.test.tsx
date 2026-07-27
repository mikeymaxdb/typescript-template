import { act } from 'react'
import { createRoot } from 'react-dom/client'
import { describe, expect, it } from 'vitest'

import { App } from './app'

describe('app suite', () => {
    it('renders App into the DOM', () => {
        expect.assertions(1)
        const root = document.createElement('div')
        document.body.append(root)

        act(() => {
            createRoot(root).render(<App />)
        })

        expect(root.innerHTML).not.toBe('')
    })
})
