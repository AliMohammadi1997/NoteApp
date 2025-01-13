interface PropTypes {
    color :string
    onColor:(color :string) => void,
}

const Colors = ({color,onColor}:PropTypes) => {

    const btnColorHandler = (color:string) =>{
    onColor(color)
    focus()
    }

    return (
        <>
            <button onClick={()=> {btnColorHandler(color)}} className= 'w-4 h-4 rounded-full m-1' style={{backgroundColor:color}}></button>
        </>
     );
}

export default Colors;
