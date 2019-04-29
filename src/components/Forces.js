import React, { Component } from 'react';


export default class Forces extends Component {
constructor(){
    super();
    this.state={
        forcesArr:[],//initializing array to hold fecthing data
        result:[],//initializing array to hold resulting data
        text:'',//to control input value 


    }
}


componentDidMount(){
    fetch('https://data.police.uk/api/forces')//fetching data from api 
    .then(response => response.json())//converting fething response into json
    .then(res => this.setState({forcesArr:res}))//assigning response into array
    console.log(this.state.forcesArr)

}

//function for Seacrhing user input
inpVal(e){
    const {forcesArr}=this.state;//destructring  forcesArr 
    
    //filtering the input given by user serially
   const result= forcesArr.filter((val)=>{
       //converting each value in forcesArr and obtaining sub string then converting both value
       // and user input into lower case and using the indexOf function  checking if the sub string 
       //is matching with user input or not   

        return val.name.substr(0,e.length).toLowerCase().indexOf(e.toLowerCase())!==-1  
    })
    this.setState({result,text:e})//setting the result into state and assigning user input into text state 

}


  
    
render() {
    const {forcesArr,result,text}=this.state //destructring 
    //if result is ready and text have a length <0 then assign result into showTable else assign forcesArr
    const showTable=result.length && text.length ? result : forcesArr 
    return (
      <div>
                <h1>Forces</h1>
                { console.log(this.state.forcesArr)}
                <div className='input-group col-md-4 offset-md-4' >
                    <input className='form-control' placeholder='Search Forces by Name Here ...'  value={text} onChange={(e)=>this.inpVal(e.target.value)} />
                </div>
                <br />
                <br />


             <table className="col-md-8 offset-md-2" style={{boxShadow:'0px 0px 10px grey',padding:'40px'}} > 
                 <thead >
                     <tr style={{backgroundColor:'black',color:'white',}}>
                         <td style={{padding:'10px'}}><h2>ID</h2></td>
                         <td style={{padding:'10px'}}><h2>Name</h2></td>
                     </tr>

                 </thead>

                 <tbody>
                 {
                     //running map on showtable to show the final output to user either search result or complete forces Arr
                     showTable.map((val,inx)=>{
                       return(

                           <tr>
                            <td style={{padding:'10px'}}>
                               <b> {val.id}</b>
                            </td>
                            <td style={{padding:'10px'}}>
                            <b> {val.name}</b>
                         
                            </td>
                        </tr> 
                     ) 
                     })
                 }
                     
                     
                 </tbody>

             </table>

                

                

      </div>
    )
  }
}

