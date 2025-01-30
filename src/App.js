import React, {useState} from 'react';
import Counter from "./Components/Counter";
import ClassCounter from "./Components/ClassCounter";
import './styles/app.css';
import Post from "./Components/Post";
import PostList from "./Components/PostList";
import MyButton from "./Components/Ui/button/MyButton";
import MyInput from "./Components/Ui/input/MyInput";
function App() {
    const [ value, setValue] = useState("random text");
    const [posts, setPosts] = React.useState([
        {id: 1, title: 'Abracadabra1', body: 'descr'},
        {id: 2, title: 'Abracadabra2', body: 'descr'},
        {id: 3, title: 'Abracadabra3', body: 'descr'}
    ]);
    const [title, setTitle] = React.useState("");
    const [body, setBody] = React.useState("");


    const addNewPost = (e)=> {
        e.preventDefault();
        const newPost = {
            id : Date.now(),
            title,
            body
        }
        setPosts([...posts, newPost ]);
        setTitle("");
        setBody("");
    }

  return (
    <div className="App">
        <form action="">
            {/*first way of extracting the data */}
            <MyInput
                value={title}
                onChange ={e => setTitle(e.target.value)}
                type="text"
                placeholder="header"/>
            {/*second way - through useRef, called an uncontrolled component    */}
            <MyInput
                value = {body}
                type="text"
                placeholder="body"
                onChange={e => setBody(e.target.value)}
               />
            <MyButton  onClick={addNewPost}>Send</MyButton>
        </form>
        <PostList posts={posts}  title={"Posts line 1"} />
    </div>
  );
}

export default App;
