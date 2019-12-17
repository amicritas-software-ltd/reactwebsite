import React, { Component } from "react";
import { FacebookProvider, Page } from "react-facebook";
class FacebookPage extends Component {
  render() {
    return (
      <FacebookProvider appId="597319981032149">
        <Page
          href="https://www.facebook.com/Amicritas"
          tabs="timeline"
          smallHeader="true"
          height="180"
        />
      </FacebookProvider>
    );
  }
}

export default FacebookPage;
