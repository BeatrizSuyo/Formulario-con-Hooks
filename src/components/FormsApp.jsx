import { useState } from "react"

//aparece directamenete en la interface
export const FormsApp = () => {

    const [formState, setFormState] = useState({
        username:'',
        email:'',
        password:''
    })

//dessetructurar
    const {username, email, password} = formState

    const onInputChange = ({target}) => {
        console.log(target);   
        const { name, value } = target
        setFormState ({
            ...formState,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.prevenDefault()
        console.log(formState);
        
    }
    return (
        <>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        value={username}
                        onChange={onInputChange} /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email"
                        name="email"
                        value={email}
                        onChange={onInputChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password"
                        name="password"
                        value={password}
                        onChange={onInputChange}/>
                </div>
            
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
