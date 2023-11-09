import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useColorScheme
} from '@mui/material'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'

function App() {
  return (
    <>
      <ModeToggle />
      <div>HELLO WORLD</div>
      <Button>123</Button>
      <AccessAlarmIcon />
      <ThreeDRotation />
    </>
  )
}

function ModeToggle() {
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

export default App
