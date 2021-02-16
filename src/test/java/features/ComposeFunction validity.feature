@ComposeFunctionalitytest
Feature: Gmail Compose function validity

@ComposeFunction
Scenario: TC01_Verifying Compose function availability on log in 
Given User launches "Gmail" page
Then User should be on the "Gmail" page
When User provides correct credentials and logs in to Gmail
Then User validates "Compose" button is "displayed" on "Home" page

@VerifyingFileAttachement
Scenario Outline: TC02_Verifying that files can be attached and can be sent
Given User launches "Gmail" page
Then User should be on the "Gmail" page
When User provides correct credentials and logs in to Gmail
Then User validates "Compose" button is "displayed" on "Home" page
When User clicks on "Compose button"
And User enters "<Recipient EmailAddres>" in the "To" field
And User enters "<Subject>" in the "Subject" field
When User clicks on "Attachment Link"
And User upload "Document1" document
And User clicks on "Send button"
And User verifies "Message sent" text on "Home" page

Examples:
|Recipient EmailAddres|Subject|
|xyz@gmail.com|PFA document	|


@VerifyingAttachementMultiple
Scenario Outline: TC03_Verifying that multiple files can be attached and can be sent
Given User launches "Gmail" page
Then User should be on the "Gmail" page
When User provides correct credentials and logs in to Gmail
Then User validates "Compose" button is "displayed" on "Home" page
When User clicks on "Compose button"
And User enters "<Recipient EmailAddres>" in the "To" field
And User enters "<Subject>" in the "Subject" field
When User clicks on "Attachment Link"
And User upload "Document1" document
When User clicks on "Attachment Link"
And User upload "Document2" document
And User clicks on "Send button"
And User verifies "Message sent" text on "Home" page

Examples:
|Recipient EmailAddres|Subject|
|xyz@gmail.com|PFA document	|


@VerifyingFileSentForMultipleRecipients
Scenario Outline: TC04_Verifying that one file can be attached and can be sent to multiple recipients
Given User launches "Gmail" page
Then User should be on the "Gmail" page
When User provides correct credentials and logs in to Gmail
Then User validates "Compose" button is "displayed" on "Home" page
When User clicks on "Compose button"
And User enters "<Recipient EmailAddres1>" in the "To" field
And User enters "<Recipient EmailAddres2>" in the "To" field
And User enters "<Subject>" in the "Subject" field
When User clicks on "Attachment Link"
And User upload "Document1" document
And User clicks on "Send button"
And User verifies "Message sent" text on "Home" page

Examples:
|Recipient EmailAddres1|Subject		|Recipient EmailAddres2|
|xyze@gmail.com|PFA document	|xyz100@gmail.com|


@VerifyingMultipleFileSentForMultipleRecipients
Scenario Outline: TC05_Verifying that multiple files can be attached and can be sent to multiple recipients
Given User launches "Gmail" page
Then User should be on the "Gmail" page
When User provides correct credentials and logs in to Gmail
Then User validates "Compose" button is "displayed" on "Home" page
When User clicks on "Compose button"
And User enters "<Recipient EmailAddres1>" in the "To" field
And User enters "<Recipient EmailAddres2>" in the "To" field
And User enters "<Subject>" in the "Subject" field
When User clicks on "Attachment Link"
And User upload "Document1" document
When User clicks on "Attachment Link"
And User upload "Document2" document
And User clicks on "Send button"
And User verifies "Message sent" text on "Home" page

Examples:
|Recipient EmailAddres1|Subject		|Recipient EmailAddres2|
|xyze@gmail.com|PFA document	|xyz100@gmail.com|


@VerifyingAlertErrorWhenNoSubject
Scenario Outline: TC06_Verifying alert error when subject is not available and still able to send mail
Given User launches "Gmail" page
Then User should be on the "Gmail" page
When User provides correct credentials and logs in to Gmail
Then User validates "Compose" button is "displayed" on "Home" page
When User clicks on "Compose button"
And User enters "<Recipient EmailAddres>" in the "To" field
And User enters "<Subject>" in the "Subject" field
#When User clicks on "Attachment Link"
#And User upload "Document" document
And User clicks on "Send button"
#And User verifies alert message "Send this message without a subject or text in the body?"
And User verifies and "accept" alert "Send this message without a subject or text in the body?"
And User verifies "Message sent." text on "Home" page

Examples:
|Recipient EmailAddres|Subject|
|xyz@gmail.com| 	|


@VerifyingErrorWhenNoToAddress
Scenario Outline: TC07_Verifying error when recipient address is not available 
Given User launches "Gmail" page
Then User should be on the "Gmail" page
When User provides correct credentials and logs in to Gmail
Then User validates "Compose" button is "displayed" on "Home" page
When User clicks on "Compose button"
#And User enters "<Recipient EmailAddres>" in the "To" field
And User enters "<Subject>" in the "Subject" field
When User clicks on "Attachment Link"
And User upload "Document1" document
And User clicks on "Send button"
And User verifies "Please specify at least one recipient." text on "Home" page

Examples:
|Recipient EmailAddres|Subject|
|xyz@gmail.com|PFA document	|


@VerifyingErrorWhenToEmailisNotvalid
Scenario Outline: TC08_Verifying error when emailAddress is not valid
Given User launches "Gmail" page
Then User should be on the "Gmail" page
When User provides correct credentials and logs in to Gmail
Then User validates "Compose" button is "displayed" on "Home" page
When User clicks on "Compose button"
And User enters "<Recipient EmailAddres>" in the "To" field
And User enters "<Subject>" in the "Subject" field
When User clicks on "Attachment Link"
And User upload "Document1" document
And User clicks on "Send button"
And User verifies "Please make sure that all addresses are properly formed." text on "Home" page

Examples:
|Recipient EmailAddres|Subject|
|@@@@@|PFA document	|


@VerifyingComposeforCCandBCC
Scenario Outline: TC09_Verifying CC and BCC field and sendgin mails
Given User launches "Gmail" page
Then User should be on the "Gmail" page
When User provides correct credentials and logs in to Gmail
Then User validates "Compose" button is "displayed" on "Home" page
When User clicks on "Compose button"
Then User validates "Cc" button is "displayed" on "Home" page
Then User validates "Bcc" button is "displayed" on "Home" page
And User enters "<Recipient EmailAddres>" in the "To" field
And User enters "<CC EmailAddres>" in the "Cc" field
And User enters "<BCC EmailAddres>" in the "Bcc" field
And User enters "<Subject>" in the "Subject" field
When User clicks on "Attachment Link"
And User upload "Document1" document
And User clicks on "Send button"
#And User verifies alert message "Send this message without a subject or text in the body?"
#And User verifies and "accept" alert "Send this message without a subject or text in the body?"
And User verifies "Message sent." text on "Home" page

Examples:
|Recipient EmailAddres|Subject				|CC EmailAddres			|BCC EmailAddres|			
|xyz@gmail.com| CcBcc validation	|xyz100@gmail.com|wxy100@gmail.com|




