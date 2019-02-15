---
title: "Rampage – Not another Conventional Line Following Robot"
excerpt: "<img src='/images/rampage1.png'><br/><br/>The task was set to design an Analog Line Following Robot without the use of any Micro controllers. This was a quite straight forward task which requires the use of a closed loop feedback from line sensors (usually a combination of a LED/LDR), which is used by the Controller which includes a comparator. But me and my team thought of a different method to achieve the required task by thinking of a new design. "
collection: portfolio
---

The task was set to design an Analog Line Following Robot without the use of any Micro controllers. This was a quite straight forward task which requires the use of a closed loop feedback from line sensors (usually a combination of a LED/LDR), which is used by the Controller which includes a comparator. But me and my team thought of a different method to achieve the required task by thinking of a new design. 

<img src='/images/rampage1.png'>

The only constraint we had was the usage of Micro controllers. Thus we worked our way through the problem we thought why not identify all the possible states in advance which are required for the Robot to follow through the given line. The main focus was to design something new rather than using a conventional approach.

All possible states which the Robot needs were identified based on the road conditions. The road conditions were in the form of left/right turns, sharp left/right turns, curved turns etc. Hence we identified all this conditions and next we developed a sensor array. For the design we developed we needed something more than a conventional sensor array, thus we designed an adjustable sensor array in a 2 x 3 matrix formation. The individual sensors were IR sensors which could be adjusted so that they formed a unique state for each of the road conditions we identified.

<img src='/images/rampage2.png'>

So with respective to the road conditions we were able to derive a truth table which identified uniquely the inputs of the sensor array we developed and thus use these inputs to drive the motors appropriately. The main states of the motors we identified are presented in the table below. 

<img src='/images/rampage3.png'>
<img src='/images/rampage4.png'>

Upon the successful derivation of the truth table we were able to simulate the results via the Logisim Software and thus design the circuit. Since a conventional PID controller was not used to reduce the error, a PWM mechanism was used in order to control the speed when turning and moving forward. It should be noted that all the identified states did not require a constant speed, some of the states required much higher speed of rotation of the motors compared to others. Thus we used a PWM mechanism after identifying those relevant states and their associated speed levels. The truth table was extended with assigning the power levels associated with the states. 

<img src='/images/rampage5.png'>

Results

Rampage was able to successfully accomplish the task which was assigned and it was identified that the Robot worked in an optimum speed of 20cm/s. The further increase of the speed resulted in higher deviations and oscillations from the path. Thus this level of speed was adjusted in order to accomplish the given task. 

This project was carried out as a requirement of the Laboratory Practice II module at the Department of Electronics & Telecommunication Engineering, University of Moratuwa. And the successful completion was a result of the team work and innovative thinking by the team members Chirath Hettiarachchi, Ahamed Ifham, Mohammed Ijaz and Achintha Ihalage. We hope this would provide some insights in designing line following robots in a new manner compared to the conventional methods which are of abundance. 

A complete report of the project can be obtained via - https://drive.google.com/open?id=0B0CRcSuQbY6fWFladmM3T0swMXM
