import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./style.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import SvgIcon from "@mui/icons-material/Twitter";
import StoreIcon from "@mui/icons-material/Store";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import NewspaperRoundedIcon from "@mui/icons-material/NewspaperRounded";
import Card from "../../card";
import { cardsInfo } from "./cardsInfo";

const DashRapport = () => {
  return (
    <div className={styles.dashRapport}>
	
      	<div className={styles.panels}>
			{	cardsInfo?.map((elmnt, index) => {
				return (
					// <div className={styles.rapportCard}>
					<Card key={index}>
						<div className={styles.logo}>
						<SvgIcon
							component={elmnt.icon}
							inheritViewBox
							className={elmnt.GradientColor}
						/>
						</div>
						<p>{elmnt.title}</p>
						<h3>
						{elmnt.unitValue} <small>{elmnt.unit}</small>
						</h3>
					</Card>
				)	
			})
			}
		</div>
		</div>
  );
};

export default DashRapport;
