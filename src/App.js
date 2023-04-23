
import UsersLists from "./components/UsersList/UsersList.js";
// import AddUser from "./components/AddUser/AddUser.js";

function App() {
    alert( `Before you start , 
This data is static because there is no backend in this app , 
We just use the get method. `)
    return (
        <div className="container mx-auto">

            <UsersLists />


        </div>
    );
}

export default App;
