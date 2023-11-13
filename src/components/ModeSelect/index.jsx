import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { useColorScheme } from '@mui/material'

const ModeSelect = () => {
  const { mode, setMode } = useColorScheme()

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id='demo-simple-select-autowidth-label'>Mode</InputLabel>
        <Select
          labelId='demo-simple-select-autowidth-label'
          id='demo-simple-select-autowidth'
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          autoWidth
          label='Mode'
        >
          <MenuItem value='light'>Light</MenuItem>
          <MenuItem value='dark'>Dark</MenuItem>
          <MenuItem value='system'>System</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default ModeSelect
