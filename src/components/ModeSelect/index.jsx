import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { Box, useColorScheme } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'

const ModeSelect = () => {
  const { mode, setMode } = useColorScheme()

  return (
    <div>
      <FormControl size='small' sx={{ minWidth: 120 }}>
        <InputLabel
          id='demo-simple-select-autowidth-label'
          sx={{ color: 'white', '&.Mui-focused': { color: 'white' } }}
        >
          Mode
        </InputLabel>
        <Select
          labelId='demo-simple-select-autowidth-label'
          id='demo-simple-select-autowidth'
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          autoWidth
          label='Mode'
          sx={{
            color: 'white',
            '.MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white'
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white'
            },
            '.MuiSvgIcon-root': { color: 'white' }
          }}
        >
          <MenuItem value='light'>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <LightModeIcon fontSize='smaill' /> Light
            </div>
          </MenuItem>
          <MenuItem value='dark'>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <DarkModeIcon fontSize='smaill' /> Dark
            </Box>
          </MenuItem>
          <MenuItem value='system'>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <SettingsBrightnessIcon fontSize='smaill' /> System
            </Box>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default ModeSelect
