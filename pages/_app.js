import '@/styles/globals.css'
import {Provider} from 'react-redux'
import {store} from '../app/store'
import {fetchMenuItems} from '../features/MenuItems/menuItemsSlice'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
