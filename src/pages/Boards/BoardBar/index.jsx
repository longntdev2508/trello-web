import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import SpeedIcon from '@mui/icons-material/Speed'
import FilterListIcon from '@mui/icons-material/FilterList'
import BoltIcon from '@mui/icons-material/Bolt'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLE = {
  px: '5px',
  color: 'white',
  bgcolor: 'transparent',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

const AVATAR_LINK =
  'https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-6/393732324_1978467629175137_3569439556806809371_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=s4Q65-J3HwkAX9DyGZJ&_nc_ht=scontent.fsgn5-13.fna&oh=00_AfCH14xhCqixc2VNXzOgrOnS_900PK8aV8sRrvK460SGyw&oe=65791A95'

const BoardBar = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #fff',
        justifyContent: 'space-between',
        gap: 2,
        px: 2,
        overflowX: 'auto',
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          label='LongNguyenDev'
          clickable
          icon={<DashboardIcon />}
          sx={MENU_STYLE}
        />
        <Chip
          label='Private/Public'
          clickable
          icon={<VpnLockIcon />}
          sx={MENU_STYLE}
        />
        <Chip label='Speed' clickable icon={<SpeedIcon />} sx={MENU_STYLE} />
        <Chip
          label='Filter'
          clickable
          icon={<FilterListIcon />}
          sx={MENU_STYLE}
        />
        <Chip
          label='Automation'
          clickable
          icon={<BoltIcon />}
          sx={MENU_STYLE}
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant='outlined'
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >
          Invite
        </Button>

        <AvatarGroup
          max={4}
          sx={{
            gap: '2px',
            '& .MuiAvatar-root': {
              width: '32px',
              height: '32px',
              fontSize: '16px',
              border: 'none'
            }
          }}
        >
          <Tooltip title='LongNguyenDev'>
            <Avatar alt='LongNguyenDev' src={AVATAR_LINK} />
          </Tooltip>
          <Tooltip title='LongNguyenDev'>
            <Avatar alt='LongNguyenDev' src={AVATAR_LINK} />
          </Tooltip>
          <Tooltip title='LongNguyenDev'>
            <Avatar alt='LongNguyenDev' src={AVATAR_LINK} />
          </Tooltip>
          <Tooltip title='LongNguyenDev'>
            <Avatar alt='LongNguyenDev' src={AVATAR_LINK} />
          </Tooltip>
          <Tooltip title='LongNguyenDev'>
            <Avatar alt='LongNguyenDev' src={AVATAR_LINK} />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
