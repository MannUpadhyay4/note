import React, { Fragment } from "react";
import {
  NC,
  H,
  P,
  LI,
  CB
} from "./notes.jsx";
import Header from "./NewDayHeader.jsx";

const App = () => {
  return (
    <Fragment>
        <Header date="2025-01-08" lecture="1" header="Electronics intro" />

        <NC>
          <P>just course intro</P>
        </NC>
        
        <Header date="2025-01-10" lecture="2" header="Current and Charges" />
        <NC>
          <H level={2}>
          Current and Charges 
          </H>
          <CB>
            >i = dq/dt
          </CB>
          <P>
          if charge is constant the current =0 <br/>
            >made graph for y=|x-2|-2 <br/>
            >sinosidal , damped and expontential graphs
          </P>
          
        </NC>

<Header date="2025-01-13" lecture="3" header="Current and Charges" />
        <NC>
          <P>
              
          <LI
            items={
              [
                `if e- moves right that would imply that current moves to the left`,
                `Voltage may exist even if current is not flowing`,
                `Energy is conserved`,
                `+--+ cell wont add up voltages but subtract them,use +-+- (cause in first case both are trying to make curr flow in opps dir)`,
              ]
            }>
    </LI>
    <H level = {2}>POWER!</H>
    <CB>
      P=VI
      unit = Watts
    </CB>
    <LI 
    items={[
        `out of + is supply and out of - is absorb`,
      
    ]}>
    </LI>
          </P>      
        </NC>

    <Header date="2025-01-14" lecture="t-1" header="ohms law" />
 <NC> 
    <H level = {2}>OHMS LAW</H>
        <CB>
          V=IR
        </CB>
    <P>short circuit:</P>
    <LI 
    items={[
        `ideal wire R is 0(ideal aint real not possible not yet)`,
        `R->0 => I->inf => Heat disipation=> inf ,short circuit ,thus not feasible (also not possible as power -> inf)`,
      
    ]}>
    </LI>

    <P>open circuit: not connected curr 0 ,res inf and curr 0 </P>
    
 </NC>  

    <Header date="2025-01-15" lecture="4" header="curr sources" />
    <NC>
      <P>
        <H level = {1}>Voltage/Current sources</H>
                  <LI
            items={
              [
                `indipendent curr source `,
                `independant voltage source`,
                `dipendent curr source `,
                `dependant voltage source`,
              ]
            }>
    </LI>

    </P>
    </NC>
    </Fragment>
  );
};

export default App;
