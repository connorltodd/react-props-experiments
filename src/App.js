import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import User from "./components/User";
import SimsponsCharacter from "./components/SimsponsCharacter";
import Avatar from "./components/Avatar";

const homer = {
  name: "Homer Simspon",
  age: 42,
};

const userInfo = {
  name: "Johnson",
  address: {
    city: "Lisbon",
    street: "Rua 101",
  },
};

const bart = {
  image:
    "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
  firstName: "Bart",
  lastName: "Simpson",
};

function App() {
  return (
    <div className="App">
      {/* <HelloWorld /> */}
      {/* <User name="John" email="john@gmail.com" /> */}
      {/* <User name="Jane" email="jane@gmail.com" /> */}
      {/* <SimsponsCharacter user={homer} /> */}
      {/* <SimsponsCharacter {...homer} /> */}
      {/* <SimsponsCharacter name={homer.name} age={homer.age} />
       */}

      {/* <User {...userInfo} isOnline={false} /> */}

      {/* <Avatar
        image="https://i.pravatar.cc/300"
        firstName="Bart"
        lastName="Simspson"
      /> */}
      <Avatar {...bart} />

      <Avatar
        image="https://i.pravatar.cc/300"
        firstName="Homer"
        lastName="Simspson"
      />
    </div>
  );
}

export default App;
