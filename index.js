import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';

const element = document.getElementById('app')

const app = (
  <>
    <Helmet>
      <title>
        discordapp.dev cname service
      </title>
    </Helmet>
    <h1>discordapp.dev cname service</h1>
    <p>cname cname cname</p>
    <hr />
    <a href="https://github.com/Terminal/discordapp.dev">
      <i>create an issue please on github thanks</i>
    </a>
  </>
)

ReactDOM.render(app, element)
