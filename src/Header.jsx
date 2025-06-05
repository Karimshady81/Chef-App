import ChefLogo from "./Images/Chef.png"

export default function Header(){
    return(
        <header>
            <img src={ChefLogo}/>
            <h1>Chef App</h1>
        </header>
    )
}