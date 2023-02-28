import { useState } from "react";

export default function FeedBack({onSubmit}) {
    const [score, setScore] = useState("10");
    const [comment, setComment] = useState("");

    const isDisabled = Number(score) <= 5 && comment.length <= 10;

    const textAreaPlaceholder = isDisabled
    ? "Please provide a comment explaining why the expercience was not good. Minimum length is 10 character"
    :"Optional feedback";

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({score, comment});
        // setComment("");
        // setScore("10");
    };
    return(
        <div className="Feedback">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Feedback Comment</h2>
                    <div>
                        <label>Score: {score}</label>
                        <input 
                        type="range"
                        min="0"
                        max="10" 
                        value={score} 
                        onChange={(e) => setScore(e.target.value)} />
                    </div> 
                    <div>
                        <label>Comment  </label>
                        <textarea 
                        placeholder={textAreaPlaceholder}
                        name="comment"
                        value={comment} 
                        onChange={(e) => setComment(e.target.value)} />
                    </div> 
                    <button disabled={isDisabled} type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    );

};
