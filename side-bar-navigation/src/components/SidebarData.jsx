import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PaymentIcon from '@mui/icons-material/Payment';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SettingsIcon from '@mui/icons-material/Settings';

const SidebarData = [
    {
        title: "ホーム",
        icon: <HomeIcon />,
        link: "/home"
    },
    {
        title: "メール",
        icon: <EmailIcon />,
        link: "/mail"
    },
    {
        title: "アナリティクス",
        icon: <InsertChartIcon />,
        link: "/analytics"
    },
    {
        title: "友達追加",
        icon: <PersonAddIcon />,
        link: "/friend"
    },
    {
        title: "お支払い設定",
        icon: <PaymentIcon />,
        link: "/payment"
    },
    {
        title: "アップロード",
        icon: <CloudUploadIcon />,
        link: "/upload"
    },
    {
        title: "詳細設定",
        icon: <SettingsIcon />,
        link: "/setting"
    },
]

export default SidebarData;