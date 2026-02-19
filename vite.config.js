import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        events: 'events.html',
        bounties: 'bounties.html'
      }
    }
  }
})
