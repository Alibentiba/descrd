import './App.css';
import Nvabar from './Navbar/Nvabar';
function App() {
<<<<<<< HEAD
 
=======
  const user = useSelector(state => state.userstore.user)
  const dispatch = useDispatch();

  useEffect(() => {

    auth.onAuthStateChanged((authuser) => {
      if (authuser) { dispatch(login({ uid: authuser.uid,photo: authuser.photoURL , email: authuser.email, displayName: authuser.displayName })) }
      else { dispatch(logout()) }
    })
  }, [dispatch])
  




>>>>>>> 0cc03041725d1655f4613c1abf97e22469c0c25e
  return (
    <div className="App">
     <Nvabar/>
    </div>
  );
}

export default App;
