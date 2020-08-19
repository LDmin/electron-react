import { ipcRenderer } from 'electron'

;(window as any).stopLoading = function() {
  ipcRenderer.send('stop-loading-main')
}
