import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import Box from '@mui/material/Box'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import AppsIcon from '@mui/icons-material/Apps'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import ModeSelect from '../ModeSelect'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import Profiles from './Menus/Profiles'

const AppBar = () => {
  return (
    <Box
      sx={{
        // backgroundColor: 'primary.light',
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
      px={2}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'primary.main' }} />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <SvgIcon
            component={TrelloIcon}
            inheritViewBox
            sx={{ color: 'primary.main' }}
          />
          <Typography
            variant='span'
            fontSize='1.2rem'
            sx={{ color: 'primary.main' }}
          >
            Trello
          </Typography>
        </Box>
        <Workspaces />
        <Recent />
        <Starred />
        <Templates />
        <Button variant='outlined'>Create</Button>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          id='outlined-search'
          label='Search...'
          type='search'
          size='small'
        />
        <ModeSelect />
        <Tooltip title='Notification' sx={{ cursor: 'pointer' }}>
          <Badge color='secondary' variant='dot'>
            <NotificationsNoneIcon />
          </Badge>
        </Tooltip>
        <Tooltip title='Help' sx={{ cursor: 'pointer' }}>
          <HelpOutlineIcon />
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  )
}

export default AppBar
