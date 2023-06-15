import axios from "axios";
import { MAX_LENGTH_CONTENT_CARD } from "@/config/params";
import { getFormattedDate, getTruncateText } from "@/config/utils";

function DiaryCard({ memory }) {
    const { date, time } = getFormattedDate(memory.created_at);

    const deleteMemory = async (id) => {
        try {
            await axios.delete(`api/memory/${id}`)  
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-zinc-900 dark:border-zinc-800 relative">
            <button className="flex" onClick={() => deleteMemory(memory.id)}>
                <span className="w-3 h-3 bg-red-500 rounded-full absolute top-4 right-4"></span>
            </button>
            <a href="#">
                <h5 className="mb-2 tracking-tight text-gray-900 dark:text-white">
                    <span className="text-3xl font-bold">{time}</span>
                    <br />
                    <span className="text-1xl">{date}</span>
                </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {getTruncateText(memory.content, MAX_LENGTH_CONTENT_CARD)}
            </p>
            <a href="#" className="btn-primary text-sm">
                Read more
                <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"></path>
                </svg>
            </a>
        </div>
    );
}

export default DiaryCard;
