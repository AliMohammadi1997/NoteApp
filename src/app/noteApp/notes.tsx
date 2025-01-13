interface PropType {
    id: number,
    title: string,
    color:string,
    completed:boolean,
    onRemove :(id:number) => void,
    onEdit :(id:number) => void,
}

const Notes = ({color,title,id,completed,onRemove,onEdit}:PropType) => {

const btnRemoveHandler = (id:number) => {
    onRemove(id)
}

const btnEditHandler = (id:number) =>{
    onEdit(id)
}
    return (
        <div className={`flex mb-5 ${completed ? `line-through opacity-50`  : '' } `}>
        <li style={{backgroundColor:color}} className="bg-white w-80 h-12 p-3 font-serif text-xl ml-4 ">{title}</li>
        <button onClick={() => {btnEditHandler(id)}} className="flex justify-center items-center bg-blue-500  h-12 w-12"  ><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg></button>
        <button onClick={() => {btnRemoveHandler(id)}} className="flex justify-center items-center bg-purple-800  h-12 w-12" ><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none" /><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg></button>
        </div>
     );
}

export default Notes;
