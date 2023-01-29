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
import DashboardIcon from '@mui/icons-material/Dashboard';
import StoreIcon from '@mui/icons-material/Store';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CategoryIcon from '@mui/icons-material/Category';
import WidgetsIcon from '@mui/icons-material/Widgets';
import PieChartIcon from '@mui/icons-material/PieChart';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import RateReviewIcon from '@mui/icons-material/RateReview';
import SettingsInputCompositeIcon from '@mui/icons-material/SettingsInputComposite';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

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
   addOrder: AddShoppingCartIcon,
   dashboard: DashboardIcon,
   store: StoreIcon,
   order: AssignmentIcon,
   category: CategoryIcon,
   subCategory: WidgetsIcon,
   roundPie: PieChartIcon,
   barChart: StackedBarChartIcon,
   review: RateReviewIcon,
   siteSettings: SettingsInputCompositeIcon,
   account: ManageAccountsIcon,
   systemSettings: SettingsSystemDaydreamIcon,
   users: PeopleAltIcon,
   menue: MenuOpenIcon,
   upArrow: ArrowDropUpOutlinedIcon,
   downArrow: ArrowDropDownOutlinedIcon
}
const Icons = React.forwardRef((props, ref) => {
   const { name, size, color, ...others } = props;
   const Icon = icons[name];
   return <Icon ref={ref} sx={{ fontSize: size, color: color }} {...others} />
})

export default Icons;