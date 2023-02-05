import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Custom404 = () => {
  const router = useRouter();
  const [timer, setTimer] = useState(5);
  useEffect(() => {
    setTimeout(() => {
      if (timer > 1) {
        setTimer(timer - 1);
      } else if (timer === 1) {
        router.push("/");
      }
    }, 1000);
  }, [timer]);

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ fontSize: "50px", fontWeight: "1000" }}>
          Error : Unknown Page
        </h1>
        <h2 style={{ fontSize: "35px", fontWeight: "800" }}>
          Redirect to main in ... {timer} sec
        </h2>
      </div>
    </>
  );
};
export default Custom404;
