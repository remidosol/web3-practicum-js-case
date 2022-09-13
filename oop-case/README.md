# WEB 3.0 Practicum JavaScript Case
This repo is created for enrolling Web 3 Practicum and to forward OOP case.

## Case

**Language**: TypeScript (with Node.js)

**Case Detail**: We are waiting for you to write the software of the HGS devices in the vehicles passing through the Bosphorus bridges.

Accordingly, during the keeping of the HGS records of the vehicles, an HGS number, the owner's name and surname, the class of the vehicle (1st Class: automobile, 2nd Class: minibus, 3rd Class: bus), date and time of transit, information such as the balance will be kept, and You will meet the following requirements:

- Define a separate class for each vehicle class.

- Add a toll class with a payment accepting function. Let this function be a single function that accepts all vehicle classes and reduces the balance according to the respective vehicle class.

- You are requested to report for OGS management. Have the tollbooth class keep the vehicles that pass daily in an array. Write a new class for management and write a function that, when requested, prints the total daily balance obtained.


## Install & Run

At first, install the dependencies:

```sh
yarn
```

Then you can run:

```sh
yarn watch
#or
ts-node ./src/index.ts # for windows: ts-node .\src\index.ts
```