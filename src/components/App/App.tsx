import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import { Heading, Input, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import {
  AppContainer,
  HeaderContainer,
  HeaderInnerContainer,
} from "./App.styles";

import { QUERY_ARTISTS_BY_NAME } from "../../graphql/query";

import Artists from "../../modules/Artists/Artists";
import Artist from "../../modules/Artist/Artist";

interface QueryArtistByNameFormProps {
  byName: string;
}

const validationSchema = Yup.object().shape({
  byName: Yup.string().required("Artist name is required"),
});

const App = () => {
  const [queryArtistByName, { loading, data }] = useLazyQuery(QUERY_ARTISTS_BY_NAME);

  const { register, handleSubmit, getValues } = useForm<QueryArtistByNameFormProps>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = () => {
    queryArtistByName({ variables: { byName: getValues().byName } })
  }

  return (
    <BrowserRouter>
      <AppContainer>
        <HeaderContainer>
          <Heading
            color="#101010"
            as="h1"
            letterSpacing="-0.03em"
            textAlign="start"
            justifySelf="center"
          >
            Spotify GraphQL
          </Heading>

          <HeaderInnerContainer onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              name="byName"
              placeholder="Search artist by name"
              size="lg"
              ref={register}
            />
            <Button type="submit" size="lg">
              Search
          </Button>
          </HeaderInnerContainer>
        </HeaderContainer>

        <div>
          <Switch>
            <Route exact path="/" component={() => <Artists loading={loading} data={data} />} />
            <Route exact path="/artist/:id" component={Artist} />
          </Switch>
        </div>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
