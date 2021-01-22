import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import Character from "../components/Character/Character";
import { Container, CssBaseline, TextField, Grid } from "@material-ui/core";

import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  const [query, setQuery] = useState("");
  const [characters, setCharacters] = useState(data);

  const handleSearch = (e) => {
    const name = e.target.value;
    setQuery(name);

    !!name
      ? filterCharacters(name)
      : setCharacters(data);
  }

  const filterCharacters = (name) => {
    const filtered = characters.filter(character => character.name.toLowerCase().includes(name));
    setCharacters(filtered);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <CssBaseline />
      <Container maxWidth="md">
        <TextField
          id="outlined-full-width"
          label="Search character"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          value={query}
          onChange={handleSearch}
          variant="outlined"
        />
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            {characters && characters.map(character => (
              <Character
                key={character.key}
                id={character.id}
                name={character.name}
                type={character.type}
                gender={character.gender}
                species={character.species}
                status={character.status}
                image={character.image}
                href={true}
              />
            ))}
          </Grid>
      </Container>
    </div>
  );
}

export async function getServerSideProps() {
  const { data: { results } } = await axios.get(`${process.env.NEXT_PUBLIC_RICK_MORTY_API}`);

  return {
    props: {
      data: results
    },
  };
}
