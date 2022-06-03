import { Routes, Route } from "react-router-dom";
import { useContext, useEffect, useState, useReducer } from "react";

import { basketReducer, initialState } from "../basket/reducer";
import { UserContext } from "../context/Contex";
import GroupNotice from "./GroupNotices";
import AddGroupNotice from "./CRUD/groupNotices/AddGroupNotice";
import SendMessage from './SendMessage';
import Header from "../components/Header";
import StudentNotices from "./StudentNotices";
import AddNotice from "./CRUD/notices/AddNotice";
import Basket from "./Basket";
import UserInfo  from "./user/UserInformation.js";
import { auth } from "../firebase/init";
import { useAuthState } from "react-firebase-hooks/auth";
import { readAllStudentNotices } from "../firebase/lists";
import { readAllGroupNotices } from "../firebase/groupNotices";

const HomePage = () =>{

    const [user_log, loading, error] = useAuthState(auth);
    const [basket, dispatch] = useReducer(basketReducer,initialState );
    const {user} = useContext(UserContext);

    const [studentsNotices, setStudentNotice] = useState([]);
    const addStudentNotice = (newStudentNotice) =>{
      setStudentNotice(studentsNotices.concat([newStudentNotice]));
    }
    const [groupNotices, setGroupNotice] = useState([]);
    const [query, setQuery] = useState("");

    useEffect( () =>{
      if(loading){
        return;
      }
      if(user_log){
        readAllStudentNotices(user_log).then( (data) => setStudentNotice(data) );
        readAllGroupNotices().then((data) => setGroupNotice(data));
      }
      if(error){
        console.log(error);
      }
    }, [user_log, loading]);

    return(<>
        <Header query = {query} setQuery = {setQuery} />
        <Routes>
          <Route path="/" element={<StudentNotices students={studentsNotices} setStudentNotice={setStudentNotice} query={query.toLowerCase()}  dispatch = {dispatch} />} />
          <Route path="add" element={<AddNotice addNewStudentNotice={addStudentNotice} />}/>
          <Route path="user" element={<UserInfo />} />
          <Route path="addGroupNotice" element={<AddGroupNotice />} />
          <Route path="sendMessage" element= {<SendMessage />} />
          <Route path="groupNotices" element={<GroupNotice groupNotices={groupNotices} query={query.toLowerCase()} dispatch = {dispatch}/>}/>
          <Route path="groupNotices/sendGroupMessage" element= {<SendMessage />} />
          <Route path="basket" element={<Basket basket = {basket} dispatch = {dispatch} />}/>
        </Routes>
        </>
    );

}
export default HomePage;