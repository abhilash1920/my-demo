
function Textfields(props){

    const styles = {
        container: 'color: red;',
    }
    const yellowButton = css`
    color: #424246;
    background-color: #f9d648;
  `;
    const [colors, setcolors] = useState();

    const setStyle =(color)=>{
        color
    }

return(

    <div>
        <input placeholder={props.placeholder} color={colors}/>
    </div>
)
}
export default Textfields;