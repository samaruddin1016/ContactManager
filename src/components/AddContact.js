import React from 'react';
import { useState ,useEffect} from 'react';
import {FaTrash} from 'react-icons/fa';

const AddContact=()=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const LOCAL_STORAGE_KEY="item";
    const [item, setItem] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (name && email && contact) {
            let singleItem = {name, email,contact,id: new Date().getTime().toString()}
            setItem([...item, singleItem]);
        }
    }
        const removeitem = (id) => {
            const filteritems = item.filter((item) => item.id !== id)
            return setItem(filteritems)
        }
        useEffect(() => {
            const retriveitems=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if(retriveitems) setItem(retriveitems);
        }, []);
        useEffect(() => {
            localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(item));
        }, [item]);
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <div className="field">
                    <form>
                        <div className="ui form">
                        <label><h2>Name</h2></label>
                        <input type ="text" name="name" value={name} placeholder="Name" onChange={
                        (e) => setName(e.target.value)}></input>
                    
                        
                        <label><h2>Email</h2></label>
                        <input type ="text" name="name" value={email} placeholder="Email" onChange={
                        (e) => setEmail(e.target.value)}></input>
                    
                        
                        <label><h2>Contact</h2></label>
                        <input type ="text"  value={contact} placeholder="Mobile Number" onChange={
                        (e) => setContact(e.target.value)}></input>
                        </div>
                    </form>
                    <button onClick={handleSubmit} type="submit" style={{marginTop:'2rem',marginBottom:'2rem'}} className="ui button blue">Add</button>
                    <h3 className="btn">Contact List</h3><hr/>
                    {
                        item.map((items, index) => {
                            const {name,email,contact,id} = items;
                            return <div>
                                <div  className="ui celled list" >
                                
                                    <h3 className="mod"> {index+1} {name} <br/> {email} <br/> {contact} <button className="ui button red" on onClick={() => removeitem(id)}><FaTrash/> </button>
                                    </h3><hr/>
                                   

                                </div>
                            </div>
                        })
                    }
                </div>
                <button style={{ marginTop: '2rem' }} className="ui button green" onClick={() => setItem([])}>Clear All</button>
            </div>
        );
                }
        export default AddContact;