import React, { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [reminder, setReminder] = useState(false)
    const taskSubmit = (e) => {
        e.preventDefault();
        if (!text) {
            alert("Please Enter the Text!");
            return;
        }
        onAdd({ text, day, reminder })
        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <form className="pt-4" onSubmit={taskSubmit}>
            <input type="text" placeholder="Add Task" className="form-control" value={text} onChange={(e) => setText(e.target.value)} />
            <input type="text" placeholder="Add Day & Time" className="form-control" value={day} onChange={(e) => setDay(e.target.value)} />
            <label>Set Reminder <input type="checkbox" className="mt-2" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} /></label>
            <br />
            <input type="submit" value="Save Task" className="btn btn-success btn-block" />
        </form>
    )
}

export default AddTask
