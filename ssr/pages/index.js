import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Character from "../components/Character/Character";
import { Container, CssBaseline, TextField, Grid } from "@material-ui/core";

import styles from "../styles/Home.module.css";

export const fetchCharacters = async (name) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_RICK_MORTY_API}?name=${name}`
  );
  return data.results;
};

export default function Home() {
  const [query, setQuery] = useState("");
  const { data } = useQuery(["q", query], () => fetchCharacters(query));

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
          InputLabelProps={{
            shrink: true,
          }}
          value={query}
          onChange={(evt) => setQuery(evt.target.value)}
          variant="outlined"
        />
        {data && (
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            {data.map((character) => (
              <Character
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
        )}
      </Container>
    </div>
  );
}
