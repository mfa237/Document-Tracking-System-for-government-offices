##Light-weight Document Tracking System (DTS) for Government Offices
### Need for DTS
Imagine a Flipkart or an Amazon if they are unable to track where their packages are! What will happen to their service delivery? And customer satisfaction? Total mess, won’t it be?
Government is in the business of delivering services. Its shipments are its papers - daks (communication which comes from outside an office) and files (communication which happens within an office). And sadly, there is no easy mechanism to track any paper once it comes. It is basic wisdom that what doesn't get tracked in organizations, doesn't get done or is delayed. Of course, there are encyclopedial amounts of prescribed registers and equally voluminous rules about how to maintain them. But the reality of most field level government offices is – they are understaffed, one clerk holds multiple charges and the officer is overworked... They are supposed to have 10 clones. So none of the routine office management happens and most of the time they are indulged in firefighting mode. 
Things which are supposed to happen in routine happen only when a nudge comes in form of a call from superior office or politician or a notice from a court or commission or the person himself comes 3-4 times. And even when that happens, there is no ready mechanism to track what happened to the grievance which this old man had given 2 months back or the inquiry report the superior office had asked for 4 months back. The officer has to ask her clerk who tells either from his memory only or hurriedly searches for in his papers and files. Inevitably, many times the paper is either missing or lying unattended on some table. Then the fire-fighting begins and by the time this fire is doused some another begins. 
So what is needed is a mechanism to constantly follow-up things. Instead of following up only when that nudge comes, if follow up happens in routine, then things will get done in routine. And that is when maximum number of common people will get relief. The only thing which is needed is to make the follow-up mechanism easy and quick. Hence the need for DTS.

### The Guiding Principles

To be successful, the solution has to follow certain guiding principles apart from the usual requirements of security and so on.
* As mentioned above, there are already detailed rules and registers prescribed for following up but due to shortage of staff, overburdening of officer and complexity, they are not followed. So any solution we design has to make life easier for the staff and the officer in charge (OIC). It should replace those registers rather than be an addition to them.
* Also, one of the reasons why those registers are not maintained is that at every stage, the concerned clerk has to enter all the metadata of the document again. This is clearly undesirable and the guiding principle should be that all the metadata should be entered only once at the initial stage. At every subsequent stage, only the absolutely minimum necessary information should be added.
* Another practical reality at the ground level is poor computer literacy and weak internet. There are many e-office applications around which completely make the file movement paperless. However, the acceptance rate of such applications in government offices is very low because of: 
  * People including senior officers have become so comfortable with paper files over the decades that it becomes really difficult for them to do away with it. The ease of working with paper files is just way too better than ease of working with electronic files. Inertia of any system must be respected as much as possible otherwise even the greatest of ideas may fail even before taking off. So our solution must not do away with papers while at the same time give us all the advantages we need in following up and tracking. 
  * Not all people are comfortable with typing on a computer or even staring at it for long intervals. So the solution must keep this to a bare minimum and disturb the users in the minimum possible way in terms of the way they have been doing things over the years. 
  * They are expensive, very expensive. Not just the hardware requirements but even the licenses. This prevents offices from adopting it. The solution has to be cheap – both licenses and in terms of hardware requirements.
 ** They involve scanning and uploading documents to the server and are heavy to load, slow, cumbersome to look at and work with and require good internet connection. The solution has to avoid all this.
* Just like the standard ERP solutions in the logistics companies, this solution also has to be an end to end solution in terms of tracking. 
  * As in logistics companies where each shipment has a unique tracking id, each of our shipment i.e. dak / file should have a unique id (like Aadhar) as well. This unique id will be present in every entry regarding the dak / file and will help us in tracking it. 
  * The solution must track the dak at every change of hand right from inward till its final filing. At every stage necessary information must be recorded which can tell what happened to it.
  * The solution must be robust enough to enable us to locate any paper even decades in future in case of any RTI application or other need. In routine cases, for example where say a person comes and says he belongs to such village and gave us a BPL application 2 months back, we should be able to, within seconds, track the status of his application – whether it is stuck in our office with X person or whether it is gone for inquiry or if the inquiry has been done then this is unique id of the inquiry report which came in and then whether the final order has been generated and if so the unique id of the order and its dispatch date to the relevant office. 
* The solution will improve efficiency only when it is able to generate actionable MIS reports. Like any good MIS solution, it must have the following features: 
  * The officer must be able to track pendency in each of his section so that she can follow-up on it in regular meetings. 
  * The reports must be clickable and drillable till individual dak level in case the officer wants to see what happened to such and such particular dak.
  * She must also be able to search pending daks office wise. For example, the collector must be able to see how many and which daks are pending with electricity department or a particular SDO so that she can follow it up in regular meetings.
* It is critical that the efficiency of the solution must not be dependent upon its adoption in other offices. In government every office has its own circumstances and priorities. So for successful functioning, an office must be able to realize the full potential of the solution on a standalone basis only.
* The section clerk must also be able to mark the priority level of a matter. The OIC must be authorized to override it.
* The section must be able to specify the number of days within which the matter has to be resolved by other offices. The solution must be able to generate alerts based on this on the specified day so that automatic SMSes may be sent to the concerned officer. The solution must provide the facility of setting a fresh deadline for the disposal of the matter (or a bunch of matters in a batch). The OIC must be authorized to override it.
* Since multiple people are involved in processing of a dak, to ensure accountability, the system must be able to keep a log of all the activities pertaining to it.
* Finally, it must be a mobile friendly, web based solution with android app extensions for various purposes. 

### Structure of a Government Office
![Government Office Structure] (/public/images/govt_office.png)

A government office is organized heirarchy wise. At the top, there is an officer who is the Head of Office (HoO). Under him, there are many 'sections'. A section cann be thought of as a mini-department. Each section has a clerk and an officer in-charge (OIC) and deals with a particular type of matters. For example, there might be a section to deal with BPL appeals. 
It is very common that due to sever shortage of manpower, one clerk might be holding the charge of multiple sections and there might be no separate OICs, the HoO might be the OIC of all sections. But at a conceptual level, the office structure is like the one mentioned above.

### Workflow in Government Offices
![Government Office Workflow](/public/images/office_workflow.png)

Broadly speaking, most of the times, a government office workflow gets initiated with a dak which comes from external sources - this could be other offices or directly from citizens. It is then 'inwarded' - a process meaning the office officially recognizing that the dak has arrived. As you would have guessed by now, the inwarding work is done by what is called inward section. In the inward section, the dak is essentially sorted according to topics and passed over to concerned section. There are sections for almost everything. The section clerk makes an entry in his register and then prepares the dak for the OIC. This could mean simply presenting the dak as it is to the OIC or recording his comments/recommendations on the matter or preparing draft letters which need to be sent out to other offices regarding the matter. The dak moves between the section clerk and OIC and its final outcome is another set of daks generated to be sent out to other offices and/or archiving of original dak in some file. The detailed workflow is as below:

#### Workflow in Inward Section
* When any grievance or a dak or an email is received in the office i.e. as soon as a paper becomes an official document, it is sent to the inward section. 
* After receiving, the inward section enters all the metadata in the inward register. Now, instead of entering the metadata in the inward register, inward section will enter the metadata in the DTS. 
* The solution will generate an inward id which will become the unique id of the dak. This id will be subsequently used to track it. The inward id will be a combination of number/year. So for instance, the 512th paper coming in the office in year 2017 will get an id of 512/2017. This will be auto-generated by the solution. A template of the entry module of the inward section is given below.

 **Inward Id (Unique Id)** | **Receiving Date** | **Received From** | **Letter Date (of sending office)** | **Letter Id (of sender office)** | **Subject** | **Section**
-----|-----|-----|-----|-----|-----|-----
20/2017|17/07/2017|Department of IT|10/07/2017|F32.34/2017/34|Appointment of man with machine|Election

* After making the entry in the inward register, the inward section puts up an office seal on the paper. The seal contains the details like inward id, inward date, dealing section, date on which the dak was forwarded to dealing section and signatures of both clerks. Recording of the dates on which the dak was received by the inward section and when it was forwarded to the dealing section is necessary to bring accountability and faster processing. Otherwise in cases of delay, both sections simply blame each other and there is no way to verify which one caused it. A sample seal can look like the following:

![Sample Official Seal](/public/images/office_seal_sample.png)

#### Workflow in the Dealing Section
* Once the dak moves in the dealing section, the section is supposed to maintain a dairy where a summary of action taken on the dak will be mentioned along with other metadata. As again, due to the cumbersome entry requirements, this diary is not maintained. The solution must provide for an easy entry system by the section. A template of the entry module in the dealing section is given below:

![Sample Section Diary](/public/images/section_diary.png)

* The dak then moves between the section clerk and the OIC until its final disposal which could be either archiving it in a file or sending some further communications to other offices or both. The decision always has to be of the OIC whereas the clerk makes his recommendation and prepares draft letters/maintains registers etc. 
* If certain letters need to be sent to other offices out of this dak, then an entry for the same is made in the dispatch register. It is possible that one dak  may require multiple dispatches.
* In many cases, the incoming dak may be linked to certain other dak which had come in some time ago. In this case, this dak needs to be linked to the same file as the previous dak. 

### Project Structure
The DTS is a web-based, mobile-friendly solution. It uses Node js with Express middleware for the server side logic and has a MongoDB database at backend. The client side pages are rendered via pug view-engine and we use Bootstrap templates. Client-side pages use jQuery and Ajax to send http requests to the server. Authentication is Json Web Tokens (JWT) based. If you are not familiar with any of these, then kindly refer to some of the userful tutorials in the reference section.

* First step is user-authentication. This is done via JWT technology. The username password are sent to server which authenticates their credentials from the database and returns a token. This token is stored by the client side and contains information such as username and level of privileges she has. 
* Then depending upon who the user is, her dashboard opens. If she is an admin, the admin dashboard opens. If she is a regular user, the sections which she is responsible for open. 
* The admin will typically be the HoO. Apart from viewing all kind of reports including pendency reports, she shall be entrusted with user management functions as well i.e. to add/edit/remove users and sections.
* The inward section will only be able to 'inward' daks i.e. make entries in the inward register template as shown above and print it. Printing and keeping in hard copy all the government mandated registers is essential to meet the audit requirements.
* Once the dak is inwarded, it will move to the concerned section. The section will be able to record its comments and other details. The OIC will be able to monitor all this.
* The HoO will be able to get a complete picture of what is happening in her office. She should get all sorts of performance metrics and clickable and drillable reports.

### How to Run in Development Mode (Ubuntu)
* Make sure you have git, node js and npm installed. Then clone this repository.
* Go to that directory and run `DEBUG=dts:* npm run devstart`
* In your browser, type http://localhost:3000 which will take you to the home page. It is actually a login page. Enter login password and you are good to go!

### References
* [Node js, express, Mongodb and pug tutorial with a working example](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)
* [Jquery and Ajax tutorial](https://www.w3schools.com/jquery/default.asp)
* [Ajax tutorial](https://www.w3schools.com/js/js_ajax_intro.asp)
* [Bootstrap tutorial](https://www.w3schools.com/bootstrap/default.asp)
