const { contextBridge } = require('electron')

// Expose an empty API to the renderer for now
contextBridge.exposeInMainWorld('electronAPI', {
  ping: () => 'pong'
})
