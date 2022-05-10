
function Textfields(props){

    const styles = {
        container: 'color: red;',
    }

return(
    <div>
        <input placeholder={props.placeholder} color={styles.container}/>
    </div>
)
}
export default Textfields;