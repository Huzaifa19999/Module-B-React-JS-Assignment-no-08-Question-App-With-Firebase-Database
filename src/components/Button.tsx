type btnProps = {

    label:string,
    click:() => void,
    className:string
}

function Button(props:btnProps) {

    const {label, click, className} = props

  return (
    <>
    <button onClick={click} className={className}>{label}</button>
    </>
  )
}

export default Button