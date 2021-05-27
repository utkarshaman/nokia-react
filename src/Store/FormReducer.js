import * as constants from './FormContants'

const initialState={
	fname:"",
	lname:""
}

export default (state=initialState,{type,data}) =>{
	switch(type){
		case constants.SAVE_TO_REDUX:
            console.log("data"+data);
			return({
				...state,
				fname:data.fname,
                lname:data.lname
			})
	}
}