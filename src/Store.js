import { configureStore } from '@reduxjs/toolkit'
import Slice from './Slice'
// import Slicechanel from './Slicechanel'
export default configureStore({
  reducer: {userstore: Slice}
})