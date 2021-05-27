export const saveAndGetName =(state)=>{
   // console.log(state.fname);

    const firstname=state?.fname?state.fname:"";
    const lastname= state?.lname?state.lname:"";
     

    return {firstname,lastname};
}