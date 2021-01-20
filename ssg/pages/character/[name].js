import axios from "axios";
import Character from "../../components/Character/Character";
import { Container, Grid } from "@material-ui/core";

const dataView = ({ characters }) => {
  return (
    <>
      <Container maxWidth="md">
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          {characters &&
            characters.map((character) => (
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

export async function getStaticPaths() {
  const { data: { results } } = await axios.get(`${process.env.NEXT_PUBLIC_RICK_MORTY_API}`);

  return {
    paths: results.map(({ name }) => ({
      params: {
        name
      },
    })),
    fallback: false
  };
}

export async function getStaticProps(context) {
  const { name } = context.params;
  const { data: { results } } = await axios.get(`${process.env.NEXT_PUBLIC_RICK_MORTY_API}?name=${name}`);

  return {
    props: {
      characters: results.filter(character => character.name === name)
    },
  };
}

export default dataView;
