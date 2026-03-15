### CDA - Muliti-Device Interface Project Prep

# Part 5 _ Debug Assignment

### Challenge:

**Option 3: RPM Gauge Display Bug** 

Problem: RPM gauge shows incorrect units (decimals instead of thousands) 

- File: tablet-cluster/src/components/RPMGauge.tsx:66 

- Symptom: Gauge shows "0, 1, 2, 3" instead of "0, 1000, 2000, 3000" RPM 

- Expected: Gauge should display actual RPM values 

<br>


## Debug Prep

1. Add Consol logging

    * Check the values in generateRPMTicks Function
        
        Line 90: Outside the loop
        console.log('maxRpm:', maxRpm, 'tickCount:', tickCount);

    * Check the values inside the for loop after itteration

        Line 96: declared variable 'value' - values
        console.log('Tick', i, '- value:', value, '- expected:', (maxRpm / tickCount) * i);





2. Debugging Questions:
    - Is the function being called?
    - Are the parameters what you expect?
    - Is the calculatin logic correct?
    - Are the reslts being sent back correctly?
    - Is the UI updating with the new data?


    ## FLOW

    ### Parent Component: MainGauges.tsx

    Line 5: Imports the child component RPMGauge.tsx

    Line 22: Renders RPMguage passing the prop maxRpm with a value of 6000. 

    
    ### RPMGauge.tsx - Child Component

    Line 28: Received the prop from the parent with a default of 6000.

    Line 39: Passes maxRpm as an argument to 
        the "calculateGaugePosition() Function. 
        this is function calculates where the needle should point to on the gauge. 

        It needs to know the maximum RPM so it can map the current RPM value to the correct angle between -120 degrees and 120 degrees. 


    Line 86: Is the dependency array of the useEffect hook. 

        It watches rpm, redline, and maxRpm for changes. When a change occurs the effect re-runs and recalculates the needle positon automaticlly. 

    Line 87: The generateRPMTicks is the function that generates the tick marks for the gauge. 

        It initialized an empty ticks aray to collect each tick marks and lables as the loop builds them.
    

    Line 89: Is the variable tickCount that is set at the value of 6. 

        This controls how many time the loop will iterate. 

    Line 90: Consol.log - Show Values for maxRPM and tickCount before the loop

    Line 94: Is the for-Loop That iterates through tickCount to generate label values for the RPM Guage

    Line 95: The variable named ‘value’ is calculating the RPM label for each tick mark by each ‘i’ iteration will multiply maxRpm - divided by 1000 - divided by tickCount.

    The Console log shows the maxRpm is no longer ________ as shown in the previous Console log.


What should be happening is to take maxRpm with a value of 6000 and divide it evenly across the tickCount of 6 Intervals. 


6000 / 6 = 1000


By multiplying by ‘I’ to get each tick’s RPM value of 0, 1000, 2000, 3000, and so on each time the loop iterates. 


The issue is the / 1000   -  This scales the results down, producing 0, 1, 2, 3,  and so on. 


What it is currently doing is the value calculates at 6000 / 1000/ 6 = 1

The Fix: 
by removing the extra division of  ‘ / 1000 the maxRpm will then  be reduced by 1000 for each 6 intervals, displaying correctly at 0, 1000, 2000, 3000, and so on. 

Testing:

The RPM Gauge Ticks and labels are now rendering in the thousands. 

    

