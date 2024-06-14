import { TextField } from "@mui/material"


function Input(props:any) {

    const { label, rows, value, onChange } = props

  return (
    <>
    <TextField
        value={value}
        color="error"
        variant="outlined"
        fullWidth={true}
        label={label}
        onChange={onChange}
        multiline={true}
        rows={rows ?? 4}
    />
    </>
  )
}

export default Input