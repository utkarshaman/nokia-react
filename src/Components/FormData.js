import React, {useState} from 'react'
import { connect } from 'react-redux'
import { saveReduxData } from "../Store/FormAction";
import { saveAndGetName } from "../Store/FormSelector";

const FormData = ({saveReduxData,fullName})=> {

    const [fname,setFname]=useState('')
    const [lname,setLname]=useState('')

    const handleChangeFname=(e)=>{
        const {value}=e.target;
        setFname(value)
    }

    const handleChangeLname=(e)=>{
        const {value}=e.target;
        setLname(value)
    }

    const performSave=(e)=>{
        e.preventDefault();
        console.log(fname + " "+ lname);
        const data={
            fname:fname,
            lname:lname
        }
        saveReduxData(data);
    }
    return (
        <>
            <div className="formData">
                First Name:<input type="text" onChange={handleChangeFname} value={fname}></input>
                Last Name:<input type="text" onChange={handleChangeLname} value={lname}></input>
                <br></br>
                
                <button onClick={performSave}>Save To Redux</button>
                <br></br>
                First Name:::: {fullName.firstname}<br></br>
                Last Name ::: {fullName.lastname}
            </div>
        </>
    )
}

const mapStateToProps = (state)=>({
    fullName:saveAndGetName(state)
})

export default connect(mapStateToProps,{saveReduxData})(FormData)
