import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  section2: {
    height: "100vh",
    width: "100%",
    display: "flex",
  },
  section2Left: {
    width: "50%",
    height: "80vh",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "green",
  },
  section2Right: {
    width: "50%",
    height: "80vh",
    backgroundColor: "blue",
  },
});

export const SectionDown = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.section2}>
        <div className={classes.section2Left}></div>
        <div className={classes.section2Right}></div>
      </div>
    </>
  );
};
