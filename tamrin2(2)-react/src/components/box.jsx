import './box.css'




const Box = ({ value }) => {
  return (
    <div class="box"
       value={value}
      style={{backgroundColor: `${value}` }}
    ></div>
  );
};

export default Box;
