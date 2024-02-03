<<<<<<< HEAD
import { useRouteError } from "react-router-dom";
=======
// import { useRouteError } from "react-router-dom";
>>>>>>> 1eb6b7fc18094613276645c05f0e93ef5d784841

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
