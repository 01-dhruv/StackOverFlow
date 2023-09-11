// import React from 'react'
// import Auth from './pages/Auth/Auth'
// import Home from './pages/Home/Home'
// import AskQuestion from './pages/AskQuestion/AskQuestion'
// import { Route, Routes } from 'react-router-dom'
// import Questions from './pages/Questions/Questions'
// import DisplayQuestions from './pages/Questions/DisplayQuestions'
// import Tags from './pages/Tags/Tags'
// import Users from './pages/Users/Users'
// import UserProfile from './pages/UserProfile/UserProfile'

// const MyRoutes = () => {
//   return (
//     <div>
//         <Routes>
//           <Route path='/' component={Home}/>
//           <Route path='/auth' component={Auth}/>
//           <Route path='/questions' component={Questions}/>
//           <Route path='/AskQuestion' component={AskQuestion}/>
//           <Route path='/Questions/:id' component={DisplayQuestions}/>
//           <Route path='/Tags' component={Tags}/>
//           <Route path='/Users' component={Users}/>
//           <Route path='/Users/:id' component={UserProfile}/>

//         </Routes>

//     </div>
//   )
// }

// export default MyRoutes



import React from 'react'
import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import { Route, Routes } from 'react-router-dom'
import Questions from './pages/Questions/Questions'
import DisplayQuestions from './pages/Questions/DisplayQuestions'
import Tags from './pages/Tags/Tags'
import Users from './pages/Users/Users'
import UserProfile from './pages/UserProfile/UserProfile'

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home /> } /> {/* Use "element" instead of "Component" */}
        <Route path='/auth' element={<Auth />} />
        <Route path='/questions' element={<Questions />} />
        <Route path='/AskQuestion' element={<AskQuestion />} />
        <Route path='/Questions/:id' element={<DisplayQuestions />} />
        <Route path='/Tags' element={<Tags />} />
        <Route path='/Users' element={<Users />} />
        <Route path='/Users/:id' element={<UserProfile />} />
      </Routes>
    </div>
  )
}

export default MyRoutes
