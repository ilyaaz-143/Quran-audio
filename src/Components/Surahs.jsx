import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Data from "./Audios";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "80vw",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
    color: theme.palette.text.secondary,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
  },
}));
export default function Surahs({ Surahs }) {
  const classes = useStyles();
  const aud = Data;
  console.log(aud[1]);
  return (
    <div className={classes.root}>
      {Surahs.map((surah) => {
        return (
          <Accordion key={surah.id} className="Title">
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography className={classes.heading}>
                {surah.name_simple}
              </Typography>
              <Typography className={classes.secondaryHeading}>
                {surah.name_arabic}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="flex">
              <Typography>revalation: {surah.revelation_place}</Typography>
              <Typography>Verses: {surah.verses_count}</Typography>
              <Typography>Meaning: {surah.translated_name.name}</Typography>
              {aud[surah.id] && (
                <audio className="audio" src={aud[surah.id]} controls />
              )}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
