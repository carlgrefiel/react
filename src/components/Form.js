import { useState } from "react";


function Form() {
    const [name, setName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        console.log("Form Submitted!");
    };
    return(
        <div className="Form">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input 
                        id="name"
                        type="text" 
                        placeholder="Name"
                        value={name} 
                        onChange={(e) => setName(e.target.value)} />
                    </div> 
                    <button disabled={!name} type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    );

}
export default Form;