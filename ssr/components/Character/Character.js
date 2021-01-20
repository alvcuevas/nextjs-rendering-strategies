import Link from "next/link";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";

import styles from "./Character.module.css";

const Character = ({ id, name, type, gender, species, status, image, href }) => {
  if (href) {
    return (
      <Link href={`character/${name}`} key={id}>
        <Card className={styles.card} key={id}>
          <CardActionArea>
            <CardMedia className={styles.media} image={image} title={name} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Type: {type}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Gender: {gender}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Species: {species}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Status: {status}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    );
  }

  return (
    <Card className={styles.card} key={id}>
      <CardActionArea>
        <CardMedia className={styles.media} image={image} title={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Type: {type}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Gender: {gender}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Species: {species}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Status: {status}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Character;
