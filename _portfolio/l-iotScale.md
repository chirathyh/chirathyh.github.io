---
title: "Gym Tracker – An IoT weight scale to record the weight of Gym User’s"
excerpt: "Gym Tracker, as the name suggests is a device capable of recording the weight of the users in order to identify the weight changes based on the requirements of the user. The system is able to identify the user via the RFID in the Gym Membership card and thus record the value of the particular user and communicate through wifi to record the data in the cloud server. The user is able to track the movement of his weight through the iWeight application developed."
collection: portfolio
---

This project carried out by me and Ahamed Ifham does seem quite simple in nature. Although it is important to note that we were able to design and develop key products based on this initial idea. This was the stepping stone towards the development of a “Gas Level Indicator” for house holds as well as the project Clardia – A Comprehensive Family Health Assistant by Olivescript.

<img src='/images/iot.png'>

Focusing on this particular project, the Gym Tracker as the name suggests is a device capable of recording the weight of the users in order to identify the weight changes according to the requirements of the user. The system is able to identify the user via the RFID in the Gym Membership card and thus record the value of the particular user and communicate through wifi to record the data in the cloud server. The user is able to track the movement of his weight through the iWeight application developed.

It is important to note that this project used an existing bathroom scale where the load cell mechanism within the scale was used for weight measurement. Since the load cell mechanism produced minute deviations of the impedance a HX711 module was used to amplify the signal. Thus we were able to use the existing bathroom scale and obtain the weight measurements.

The RFID reader and the amplified weight signal was connected to an Arduino MEGA 2560 development board to carry out the required tasks. An ESP8266 module was used in order to establish the wifi communication and finally the data was communicated to the ThingSpeak server.


The Arduino codes used for the project could be obtained via this link.

https://drive.google.com/open?id=0B0CRcSuQbY6fMEkzVTFBLVFldDQ

The mobile application was developed in order for the user to monitor his/her data.

<img src='/images/iot1.png'>
<img src='/images/iot2.png'>

It is important to note that upon the successful completion of the project we were able to identify potential other applications where the concept could be extended to. It was applied to a domestic application of a “Gas Level Detector” where the amount of LP gas existing within the Gas Cylinder could be measured and the user alerted at the potential risk of a gas outage. Also upon the discussion with Medical Students it was identified that through that some diseases required the continuous measurement of weight and also potential significant changes would also lead to diseases. Thus the important of a healthcare application. This was the inspiration towards the project “Clardia” by Olivescript.

A comprehensive Business Model can also be identified via this link. –
https://drive.google.com/open?id=0B0CRcSuQbY6fS1hYM3lKUHh4cXM

This project was carried out as a requirement of the Internet of Things Module and we believe we were able to complete it successfully gathering many experiences and familiarizing many technologies. We hope this article would bring some insight into such IoT applications and the importance of identifying marketable applications existing within the society. 
