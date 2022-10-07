import styles from "./style.module.css";
import SvgIcon from "@mui/icons-material/Twitter";
import Card from "../../card";
import { cardsInfo } from "./cardsInfo";

const DashRapport = () => {
  return (
    <div className={styles.dashRapport}>
	
      	<div className={styles.panels}>
			{	cardsInfo?.map((elmnt, index) => {
				return (
					// <div className={styles.rapportCard}>
					<Card key={index} text={elmnt.title}>
						<div className={styles.logo}>
						<SvgIcon
							component={elmnt.icon}
							inheritViewBox
							className={elmnt.GradientColor}
						/>
						</div>
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
