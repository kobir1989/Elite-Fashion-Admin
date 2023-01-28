import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PersonIcon from '@mui/icons-material/Person';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import LanguageIcon from '@mui/icons-material/Language';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const icons = {
   viewOn: VisibilityIcon,
   viewOff: VisibilityOffIcon,
   unlock: LockOpenIcon,
   admin: PersonIcon,
   lock: LockOutlinedIcon,
   facebook: FacebookIcon,
   linkedIn: LinkedInIcon,
   github: GitHubIcon,
   lightMood: LightModeIcon,
   darkMood: DarkModeIcon,
   notification: NotificationsNoneIcon,
   search: SearchIcon,
   earth: LanguageIcon,
   addOrder: AddShoppingCartIcon
}
const Icons = React.forwardRef((props, ref) => {
   const { name, size, color, ...others } = props;
   const Icon = icons[name];
   return <Icon ref={ref} sx={{ fontSize: size, color: color }} {...others} />
})

export default Icons;