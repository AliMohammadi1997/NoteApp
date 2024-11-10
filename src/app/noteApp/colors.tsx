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
            <button onClick={()=> {btnColorHandler(color)}} className= 'w-8 h-8 rounded-3xl' style={{backgroundColor:color}}></button>
        </>
     );
}

export default Colors;
