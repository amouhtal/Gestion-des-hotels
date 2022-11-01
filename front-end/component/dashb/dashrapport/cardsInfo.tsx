import SvgIcon from "@mui/icons-material/Twitter";
import StoreIcon from "@mui/icons-material/Store";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import NewspaperRoundedIcon from "@mui/icons-material/NewspaperRounded";
import styles from "./style.module.css";



export const cardsInfo = [
    {
        icon : SvgIcon,
        title: "Used Space",
        unitValue: "49/50",
        unit: "GB",
        GradientColor: styles.icon1
    },
    {
        icon : StoreIcon,
        title: "Revenue",
        unitValue: "$34,245",
        unit: "",
        GradientColor: styles.icon2

    },
    {
        icon : PriorityHighIcon,
        title: "Fixed Issues",
        unitValue: "75",
        unit: "",
        GradientColor: styles.icon3

    },
    {
        icon : NewspaperRoundedIcon,
        title: "Followers",
        unitValue: "+245",
        unit: "",
        GradientColor: styles.icon4

    }
]