import { useState } from "react"

export default function CommentForm() {

    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5,
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        });
    };

    let handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
        setFormData({
            username: "",
            remarks: "",
            rating: 5,
        });
    };



    return (
        <div>
            <h1>comments</h1>
            <form onClick={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input placeholder="username" type="text" value={formData.username} onChange={handleInputChange} id="username" name="username" />
                <br /><br /><br />

                <label htmlFor="remarks">Remarks</label>
                <textarea placeholder="add few remarks" value={formData.remarks} onChange={handleInputChange} id="remarks" name="remarks" />
                <br /><br /><br />

                <label htmlFor="rating">Rating</label>
                <input placeholder="rating" type="Number" min={1} max={5} value={formData.rating} onChange={handleInputChange} id="rating" name="rating" />
                <br /><br /><br />

                <button>Submit</button>


            </form>
        </div>
    );
}