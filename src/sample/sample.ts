//5分でわかるReact Hooks
//https://qiita.com/Mitsuzara/items/98d1bc4a83265a764084

import React from 'react'

//大事なメモ================================================
// () => {} で関数を定義できる　★★★
//大事なメモ================================================

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 0
//     }
//   }

//   render() {
//     return (
//JSX開始
//       <>
//         <p>You clicked {this.state.count} times</p>
//アロー関数（=>)：左に関数、右に中身。ただ、この場合は　「onclick = {() => { return (this.setStat...}}」から「{ returnを省略している}
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Click me
//         </button>
//       </>
//     )
//   }
// }
//
//export default とは
// export default App

// () => {} で関数を定義できる　★★★

// const App = () => {
//     const [count, setCount] = useState(0)

//     return (
//         <>
//         <p>You clicked { count } times < /p>
//             < button onClick = {() => setCount((prevCount) => {return prevCount+1} )}>
//                 Click me
//                     < /button>
//                     < />
//     )
//   }

// export default App