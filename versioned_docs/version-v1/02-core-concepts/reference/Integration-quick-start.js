import React from "react";
import { Redirect } from "@reach/router";

export default function Redirector({ path }) {
  return (
    <Redirect
      from={path}
      to={`/versioned_docs/version-v1/smart-contract-integration/quick-start`}
      noThrow
    />
  );
}
