import { LoginContainer } from "@/components/login/LoginContainer";
import { useServerSideCookie } from "@/lib/cookie/serverSideCookies";
import { redirect } from "next/navigation";
import { Fragment } from "react";

const Home = async () => {
  const { getRole } = useServerSideCookie();
  const userRole = getRole();

  if (userRole) redirect("/dashboard");

  return (
    <Fragment>
      <header>
        <nav>no user navbar</nav>
      </header>
      <main>
        <LoginContainer />
      </main>
      <footer>no user footer</footer>
    </Fragment>
  );
};

export default Home;
