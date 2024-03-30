
const ThemeList = (props) => {
  const themeList = props.data.theme
  return (
    <div className="milestone__subcontent">
      <ul>
       <li>{themeList[0]}</li>
       <li>{themeList[1]}</li> 
       <li>{themeList[2]}</li>  
      </ul>

    </div>
  )
}

export default ThemeList
