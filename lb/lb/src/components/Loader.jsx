import { BarLoader } from "react-spinners";

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor : "Green",


}


export const Loader = (props)=>{
    return(
        <div className="loading">
            <BarLoader loading ={props.loading} cssOverride={override} size={100} aria-label='Loading Spinner' data-testid = "loader" color='Green'/>
        </div>
    )
}