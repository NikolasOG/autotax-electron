// Renderer entrypoint (loaded by index.html)
console.log('Renderer loaded')

if (window.electronAPI) {
  console.log('electronAPI.ping ->', window.electronAPI.ping())
}
