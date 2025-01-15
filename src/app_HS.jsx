
import React, { Fragment } from "react";
import {
  NC,
  H,
  P,
  LI,
  CB,
} from "./notes.jsx";
import Header from "./NewDayHeader.jsx";

const App_HS = () => {
  return (
    <Fragment>
        <Header date="2025-01-10" lecture="2" header="Priority of Human Needs" />

        <NC>
        <H level={1}>Priority of Human Needs</H>
        <P>
          
        </P>

        <H level={2}>Contents of this session</H>

        <LI
            items={[
            "Basic human aspiration",
            "Fullfilment of development",
            "Hostilic development",
            "This role of education in hostilic development",
            ]}
        />
        <P>it will also give idea about other stuff related to humans</P>

        <H level={2}></H>
        <P>Do we truly want to be happy?
      <br/>
    Do we want to prosperous?
      <br/>
    And are we really really happy?
    and if yes does this always continue?</P>
        <CB>
            {`ASIDES FROM PHYSICAL AMENETIES WE NEED LOVE,
that's what separates us from animals`}
        </CB>
       <H level ={1}>Priority of Human Needs</H>
    <LI 
    items={
      [
        "Right Understanding",
        "Relationship",
        "Physical Facility"
      ]
    }
    /> 
        </NC>
<Header date="" lecture="" header="" />

    </Fragment>
  );
};

export default App_HS;
