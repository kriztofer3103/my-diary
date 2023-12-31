import axios from "axios";
import { useState } from "react";

function DiaryForm() {
    const [memory, setMemory] = useState({
        content: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleCleanFields();
        try {
            await axios.post("/api/memory/", memory);
        } catch (error) {
            console.log(error);
        }
    };

    const handleCleanFields = () => {
        const emptymemory = Object.keys(memory).reduce((acc, key) => {
            acc[key] = "";
            return acc;
        }, {});
        setMemory(emptymemory);
    };

    const handleChange = ({ target: { value, name } }) => {
        setMemory({
            ...memory,
            [name]: value,
        });
    };
    return (
        <div className="grid place-content-center gap-6 mb-3">
            <h1 className="text-3xl font-bold text-center">
                My Personal Diary
            </h1>
            <form className="text-center mx-2" onSubmit={handleSubmit}>
                <textarea
                    id=""
                    cols="100"
                    rows="20"
                    name="content"
                    className="p-2 w-full bg-zinc-900"
                    value={memory.content}
                    onChange={handleChange}
                ></textarea>
                <button type="submit" className="btn-primary mt-3">
                    Guardar
                </button>
            </form>
        </div>
    );
}

export default DiaryForm;
