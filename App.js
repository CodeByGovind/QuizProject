// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import TestQuiz from './components/Navigation/Drawer'

// export default function App() {
//   return (
//     <NavigationContainer>
//       <TestQuiz/>
//     </NavigationContainer>
//   )
// }

import { View } from 'react-native'
import React from 'react'
import FlatlistDemo from './components/Flatlistdemo/FlatlistDemo'
import NestedFlatlistDemo from './components/Flatlistdemo/NestedFlatlistDemo'
import FlatListTaskDemo from './components/Flatlistdemo/FlatListTaskDemo'
import SignUp from './components/BUS_BOOKING_APP/SignUp'
import Login from './components/BUS_BOOKING_APP/Login'
// import LeComponent from './LeComponent';
export default function App() {
  return (
    <View style={{flex:1}}>
      {/* <FlatlistDemo/> */}
      {/* <NestedFlatlistDemo/> */}
      <FlatListTaskDemo/>
      {/* <SignUp/> */}
      <Login/>
    </View>
  )
}
