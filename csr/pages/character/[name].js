import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { fetchCharacters } from "../index";
import Character from "../../components/Character/Character";
import { Container, Grid } from "@material-ui/core";

const dataView = () => {
  const router = useRouter();
  const { name } = router.query;
  const { data } = useQuery(["q", name], () => fetchCharacters(name));

  return (
    <>
      <Container maxWidth="md">
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          {data &&
            data.map((character) => (
              <Character
                id={character.id}
                name={character.name}
                type={character.type}
                gender={character.gender}
                species={character.species}
                status={character.status}
                image={character.image}
                href={false}
              />
            ))}
        </Grid>
      </Container>
    </>
  );
};

export default dataView;
