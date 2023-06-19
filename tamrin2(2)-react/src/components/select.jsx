import './select.css'



const ComboBox = ({value, onChange}) => {

    return(
        <select class="combo"
        value ={value}
        onChange ={(e) => {
             onChange(e.target.value)
        }}
        name="colors" id="colors">
            <option value="">Select your color</option>
            <option value="Green">Green</option>
            <option value="Red">Red</option>
            <option value="Yellow">Yellow</option>
            <option value="Blue">Blue</option>
</select>
        
    )
}

export default ComboBox