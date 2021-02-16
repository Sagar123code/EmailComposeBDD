$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ComposeFunction validity.feature");
formatter.feature({
  "line": 2,
  "name": "Gmail Compose function validity",
  "description": "",
  "id": "gmail-compose-function-validity",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ComposeFunctionalitytest"
    }
  ]
});
formatter.before({
  "duration": 4149010700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "TC01_Verifying Compose function availability on log in",
  "description": "",
  "id": "gmail-compose-function-validity;tc01-verifying-compose-function-availability-on-log-in",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@ComposeFunction"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User launches \"Gmail\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User should be on the \"Gmail\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User provides correct credentials and logs in to Gmail",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User validates \"Compose\" button is \"displayed\" on \"Home\" page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gmail",
      "offset": 15
    }
  ],
  "location": "ComposeFunctionSteps.user_launches_page(String)"
});
formatter.result({
  "duration": 4409689100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gmail",
      "offset": 23
    }
  ],
  "location": "ComposeFunctionSteps.user_should_be_page(String)"
});
formatter.result({
  "duration": 15259300,
  "status": "passed"
});
formatter.match({
  "location": "ComposeFunctionSteps.user_provides_correct_credentials_and_logs_in_to_Gmail()"
});
formatter.result({
  "duration": 16349624000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compose",
      "offset": 16
    },
    {
      "val": "displayed",
      "offset": 36
    },
    {
      "val": "Home",
      "offset": 51
    }
  ],
  "location": "ComposeFunctionSteps.user_validates_button_is_on_page(String,String,String)"
});
formatter.result({
  "duration": 299655100,
  "status": "passed"
});
formatter.after({
  "duration": 659440500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "TC02_Verifying that files can be attached and can be sent",
  "description": "",
  "id": "gmail-compose-function-validity;tc02-verifying-that-files-can-be-attached-and-can-be-sent",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@VerifyingFileAttachement"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User launches \"Gmail\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User should be on the \"Gmail\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User provides correct credentials and logs in to Gmail",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User validates \"Compose\" button is \"displayed\" on \"Home\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User clicks on \"Compose button\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters \"\u003cRecipient EmailAddres\u003e\" in the \"To\" field",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters \"\u003cSubject\u003e\" in the \"Subject\" field",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on \"Attachment Link\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User upload \"Document1\" document",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User clicks on \"Send button\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User verifies \"Message sent\" text on \"Home\" page",
  "keyword": "And "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "gmail-compose-function-validity;tc02-verifying-that-files-can-be-attached-and-can-be-sent;",
  "rows": [
    {
      "cells": [
        "Recipient EmailAddres",
        "Subject"
      ],
      "line": 26,
      "id": "gmail-compose-function-validity;tc02-verifying-that-files-can-be-attached-and-can-be-sent;;1"
    },
    {
      "cells": [
        "xyz@gmail.com",
        "PFA document"
      ],
      "line": 27,
      "id": "gmail-compose-function-validity;tc02-verifying-that-files-can-be-attached-and-can-be-sent;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2170954800,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "TC02_Verifying that files can be attached and can be sent",
  "description": "",
  "id": "gmail-compose-function-validity;tc02-verifying-that-files-can-be-attached-and-can-be-sent;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@VerifyingFileAttachement"
    },
    {
      "line": 1,
      "name": "@ComposeFunctionalitytest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User launches \"Gmail\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User should be on the \"Gmail\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User provides correct credentials and logs in to Gmail",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User validates \"Compose\" button is \"displayed\" on \"Home\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User clicks on \"Compose button\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters \"xyz@gmail.com\" in the \"To\" field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters \"PFA document\" in the \"Subject\" field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on \"Attachment Link\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User upload \"Document1\" document",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User clicks on \"Send button\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User verifies \"Message sent\" text on \"Home\" page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Gmail",
      "offset": 15
    }
  ],
  "location": "ComposeFunctionSteps.user_launches_page(String)"
});
formatter.result({
  "duration": 6264800500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gmail",
      "offset": 23
    }
  ],
  "location": "ComposeFunctionSteps.user_should_be_page(String)"
});
formatter.result({
  "duration": 13502600,
  "status": "passed"
});
formatter.match({
  "location": "ComposeFunctionSteps.user_provides_correct_credentials_and_logs_in_to_Gmail()"
});
formatter.result({
  "duration": 16809315800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compose",
      "offset": 16
    },
    {
      "val": "displayed",
      "offset": 36
    },
    {
      "val": "Home",
      "offset": 51
    }
  ],
  "location": "ComposeFunctionSteps.user_validates_button_is_on_page(String,String,String)"
});
formatter.result({
  "duration": 397148000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compose button",
      "offset": 16
    }
  ],
  "location": "ComposeFunctionSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 1128476600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz@gmail.com",
      "offset": 13
    },
    {
      "val": "To",
      "offset": 36
    }
  ],
  "location": "ComposeFunctionSteps.user_enters_in_the_field(String,String)"
});
formatter.result({
  "duration": 1234513200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PFA document",
      "offset": 13
    },
    {
      "val": "Subject",
      "offset": 35
    }
  ],
  "location": "ComposeFunctionSteps.user_enters_in_the_field(String,String)"
});
formatter.result({
  "duration": 492800300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Attachment Link",
      "offset": 16
    }
  ],
  "location": "ComposeFunctionSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 422738200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document1",
      "offset": 13
    }
  ],
  "location": "ComposeFunctionSteps.user_upload_document(String)"
});
formatter.result({
  "duration": 17987918200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Send button",
      "offset": 16
    }
  ],
  "location": "ComposeFunctionSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 267302100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Message sent",
      "offset": 15
    },
    {
      "val": "Home",
      "offset": 38
    }
  ],
  "location": "ComposeFunctionSteps.user_verifies_text_on_page(String,String)"
});
formatter.result({
  "duration": 1458042400,
  "status": "passed"
});
formatter.after({
  "duration": 739926200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "TC03_Verifying that multiple files can be attached and can be sent",
  "description": "",
  "id": "gmail-compose-function-validity;tc03-verifying-that-multiple-files-can-be-attached-and-can-be-sent",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@VerifyingAttachementMultiple"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "User launches \"Gmail\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User should be on the \"Gmail\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "User provides correct credentials and logs in to Gmail",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User validates \"Compose\" button is \"displayed\" on \"Home\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User clicks on \"Compose button\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User enters \"\u003cRecipient EmailAddres\u003e\" in the \"To\" field",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User enters \"\u003cSubject\u003e\" in the \"Subject\" field",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User clicks on \"Attachment Link\"",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "User upload \"Document1\" document",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User clicks on \"Attachment Link\"",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "User upload \"Document2\" document",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User clicks on \"Send button\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User verifies \"Message sent\" text on \"Home\" page",
  "keyword": "And "
});
formatter.examples({
  "line": 46,
  "name": "",
  "description": "",
  "id": "gmail-compose-function-validity;tc03-verifying-that-multiple-files-can-be-attached-and-can-be-sent;",
  "rows": [
    {
      "cells": [
        "Recipient EmailAddres",
        "Subject"
      ],
      "line": 47,
      "id": "gmail-compose-function-validity;tc03-verifying-that-multiple-files-can-be-attached-and-can-be-sent;;1"
    },
    {
      "cells": [
        "xyz@gmail.com",
        "PFA document"
      ],
      "line": 48,
      "id": "gmail-compose-function-validity;tc03-verifying-that-multiple-files-can-be-attached-and-can-be-sent;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2606862000,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "TC03_Verifying that multiple files can be attached and can be sent",
  "description": "",
  "id": "gmail-compose-function-validity;tc03-verifying-that-multiple-files-can-be-attached-and-can-be-sent;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@VerifyingAttachementMultiple"
    },
    {
      "line": 1,
      "name": "@ComposeFunctionalitytest"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "User launches \"Gmail\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User should be on the \"Gmail\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "User provides correct credentials and logs in to Gmail",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User validates \"Compose\" button is \"displayed\" on \"Home\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User clicks on \"Compose button\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User enters \"xyz@gmail.com\" in the \"To\" field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User enters \"PFA document\" in the \"Subject\" field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User clicks on \"Attachment Link\"",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "User upload \"Document1\" document",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User clicks on \"Attachment Link\"",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "User upload \"Document2\" document",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User clicks on \"Send button\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User verifies \"Message sent\" text on \"Home\" page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Gmail",
      "offset": 15
    }
  ],
  "location": "ComposeFunctionSteps.user_launches_page(String)"
});
formatter.result({
  "duration": 6039496800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gmail",
      "offset": 23
    }
  ],
  "location": "ComposeFunctionSteps.user_should_be_page(String)"
});
formatter.result({
  "duration": 9829400,
  "status": "passed"
});
formatter.match({
  "location": "ComposeFunctionSteps.user_provides_correct_credentials_and_logs_in_to_Gmail()"
});
formatter.result({
  "duration": 16297055000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compose",
      "offset": 16
    },
    {
      "val": "displayed",
      "offset": 36
    },
    {
      "val": "Home",
      "offset": 51
    }
  ],
  "location": "ComposeFunctionSteps.user_validates_button_is_on_page(String,String,String)"
});
formatter.result({
  "duration": 388189900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compose button",
      "offset": 16
    }
  ],
  "location": "ComposeFunctionSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 1484759300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz@gmail.com",
      "offset": 13
    },
    {
      "val": "To",
      "offset": 36
    }
  ],
  "location": "ComposeFunctionSteps.user_enters_in_the_field(String,String)"
});
formatter.result({
  "duration": 2201389500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PFA document",
      "offset": 13
    },
    {
      "val": "Subject",
      "offset": 35
    }
  ],
  "location": "ComposeFunctionSteps.user_enters_in_the_field(String,String)"
});
formatter.result({
  "duration": 600901700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Attachment Link",
      "offset": 16
    }
  ],
  "location": "ComposeFunctionSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 347062100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document1",
      "offset": 13
    }
  ],
  "location": "ComposeFunctionSteps.user_upload_document(String)"
});
formatter.result({
  "duration": 17436052900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Attachment Link",
      "offset": 16
    }
  ],
  "location": "ComposeFunctionSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 223356400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document2",
      "offset": 13
    }
  ],
  "location": "ComposeFunctionSteps.user_upload_document(String)"
});
formatter.result({
  "duration": 7902817900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Send button",
      "offset": 16
    }
  ],
  "location": "ComposeFunctionSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 245814700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Message sent",
      "offset": 15
    },
    {
      "val": "Home",
      "offset": 38
    }
  ],
  "location": "ComposeFunctionSteps.user_verifies_text_on_page(String,String)"
});
formatter.result({
  "duration": 1342720700,
  "status": "passed"
});
formatter.after({
  "duration": 560952900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 52,
  "name": "TC04_Verifying that one file can be attached and can be sent to multiple recipients",
  "description": "",
  "id": "gmail-compose-function-validity;tc04-verifying-that-one-file-can-be-attached-and-can-be-sent-to-multiple-recipients",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 51,
      "name": "@VerifyingFileSentForMultipleRecipients"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "User launches \"Gmail\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "User should be on the \"Gmail\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "User provides correct credentials and logs in to Gmail",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "User validates \"Compose\" button is \"displayed\" on \"Home\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "User clicks on \"Compose button\"",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "User enters \"\u003cRecipient EmailAddres1\u003e\" in the \"To\" field",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User enters \"\u003cRecipient EmailAddres2\u003e\" in the \"To\" field",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User enters \"\u003cSubject\u003e\" in the \"Subject\" field",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User clicks on \"Attachment Link\"",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "User upload \"Document1\" document",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User clicks on \"Send button\"",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "User verifies \"Message sent\" text on \"Home\" page",
  "keyword": "And "
});
formatter.examples({
  "line": 66,
  "name": "",
  "description": "",
  "id": "gmail-compose-function-validity;tc04-verifying-that-one-file-can-be-attached-and-can-be-sent-to-multiple-recipients;",
  "rows": [
    {
      "cells": [
        "Recipient EmailAddres1",
        "Subject",
        "Recipient EmailAddres2"
      ],
      "line": 67,
      "id": "gmail-compose-function-validity;tc04-verifying-that-one-file-can-be-attached-and-can-be-sent-to-multiple-recipients;;1"
    },
    {
      "cells": [
        "xyze@gmail.com",
        "PFA document",
        "xyz100@gmail.com"
      ],
      "line": 68,
      "id": "gmail-compose-function-validity;tc04-verifying-that-one-file-can-be-attached-and-can-be-sent-to-multiple-recipients;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2239378900,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "TC04_Verifying that one file can be attached and can be sent to multiple recipients",
  "description": "",
  "id": "gmail-compose-function-validity;tc04-verifying-that-one-file-can-be-attached-and-can-be-sent-to-multiple-recipients;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 51,
      "name": "@VerifyingFileSentForMultipleRecipients"
    },
    {
      "line": 1,
      "name": "@ComposeFunctionalitytest"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "User launches \"Gmail\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "User should be on the \"Gmail\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "User provides correct credentials and logs in to Gmail",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "User validates \"Compose\" button is \"displayed\" on \"Home\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "User clicks on \"Compose button\"",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "User enters \"xyze@gmail.com\" in the \"To\" field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User enters \"xyz100@gmail.com\" in the \"To\" field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User enters \"PFA document\" in the \"Subject\" field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User clicks on \"Attachment Link\"",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "User upload \"Document1\" document",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User clicks on \"Send button\"",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "User verifies \"Message sent\" text on \"Home\" page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Gmail",
      "offset": 15
    }
  ],
  "location": "ComposeFunctionSteps.user_launches_page(String)"
});
formatter.result({
  "duration": 7011196500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gmail",
      "offset": 23
    }
  ],
  "location": "ComposeFunctionSteps.user_should_be_page(String)"
});
formatter.result({
  "duration": 8652400,
  "status": "passed"
});
formatter.match({
  "location": "ComposeFunctionSteps.user_provides_correct_credentials_and_logs_in_to_Gmail()"
});
formatter.result({
  "duration": 18189500900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compose",
      "offset": 16
    },
    {
      "val": "displayed",
      "offset": 36
    },
    {
      "val": "Home",
      "offset": 51
    }
  ],
  "location": "ComposeFunctionSteps.user_validates_button_is_on_page(String,String,String)"
});
formatter.result({
  "duration": 326876400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compose button",
      "offset": 16
    }
  ],
  "location": "ComposeFunctionSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 1444626800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyze@gmail.com",
      "offset": 13
    },
    {
      "val": "To",
      "offset": 37
    }
  ],
  "location": "ComposeFunctionSteps.user_enters_in_the_field(String,String)"
});
formatter.result({
  "duration": 2318039700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz100@gmail.com",
      "offset": 13
    },
    {
      "val": "To",
      "offset": 39
    }
  ],
  "location": "ComposeFunctionSteps.user_enters_in_the_field(String,String)"
});
formatter.result({
  "duration": 743021100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PFA document",
      "offset": 13
    },
    {
      "val": "Subject",
      "offset": 35
    }
  ],
  "location": "ComposeFunctionSteps.user_enters_in_the_field(String,String)"
});
formatter.result({
  "duration": 929951600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Attachment Link",
      "offset": 16
    }
  ],
  "location": "ComposeFunctionSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 426357900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document1",
      "offset": 13
    }
  ],
  "location": "ComposeFunctionSteps.user_upload_document(String)"
});
formatter.result({
  "duration": 8154178400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Send button",
      "offset": 16
    }
  ],
  "location": "ComposeFunctionSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 1270168200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Message sent",
      "offset": 15
    },
    {
      "val": "Home",
      "offset": 38
    }
  ],
  "location": "ComposeFunctionSteps.user_verifies_text_on_page(String,String)"
});
formatter.result({
  "duration": 3331257100,
  "status": "passed"
});
formatter.after({
  "duration": 669019500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 72,
  "name": "TC05_Verifying that multiple files can be attached and can be sent to multiple recipients",
  "description": "",
  "id": "gmail-compose-function-validity;tc05-verifying-that-multiple-files-can-be-attached-and-can-be-sent-to-multiple-recipients",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 71,
      "name": "@VerifyingMultipleFileSentForMultipleRecipients"
    }
  ]
});
formatter.step({
  "line": 73,
  "name": "User launches \"Gmail\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "User should be on the \"Gmail\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "User provides correct credentials and logs in to Gmail",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "User validates \"Compose\" button is \"displayed\" on \"Home\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "User clicks on \"Compose button\"",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "User enters \"\u003cRecipient EmailAddres1\u003e\" in the \"To\" field",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "User enters \"\u003cRecipient EmailAddres2\u003e\" in the \"To\" field",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "User enters \"\u003cSubject\u003e\" in the \"Subject\" field",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "User clicks on \"Attachment Link\"",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "User upload \"Document1\" document",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "User clicks on \"Attachment Link\"",
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "User upload \"Document2\" document",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "User clicks on \"Send button\"",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "User verifies \"Message sent\" text on \"Home\" page",
  "keyword": "And "
});
formatter.examples({
  "line": 88,
  "name": "",
  "description": "",
  "id": "gmail-compose-function-validity;tc05-verifying-that-multiple-files-can-be-attached-and-can-be-sent-to-multiple-recipients;",
  "rows": [
    {
      "cells": [
        "Recipient EmailAddres1",
        "Subject",
        "Recipient EmailAddres2"
      ],
      "line": 89,
      "id": "gmail-compose-function-validity;tc05-verifying-that-multiple-files-can-be-attached-and-can-be-sent-to-multiple-recipients;;1"
    },
    {
      "cells": [
        "xyze@gmail.com",
        "PFA document",
        "xyz100@gmail.com"
      ],
      "line": 90,
      "id": "gmail-compose-function-validity;tc05-verifying-that-multiple-files-can-be-attached-and-can-be-sent-to-multiple-recipients;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2273324200,
  "status": "passed"
});
formatter.scenario({
  "line": 90,
  "name": "TC05_Verifying that multiple files can be attached and can be sent to multiple recipients",
  "description": "",
  "id": "gmail-compose-function-validity;tc05-verifying-that-multiple-files-can-be-attached-and-can-be-sent-to-multiple-recipients;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 71,
      "name": "@VerifyingMultipleFileSentForMultipleRecipients"
    },
    {
      "line": 1,
      "name": "@ComposeFunctionalitytest"
    }
  ]
});
formatter.step({
  "line": 73,
  "name": "User launches \"Gmail\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "User should be on the \"Gmail\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "User provides correct credentials and logs in to Gmail",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "User validates \"Compose\" button is \"displayed\" on \"Home\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "User clicks on \"Compose button\"",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "User enters \"xyze@gmail.com\" in the \"To\" field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "User enters \"xyz100@gmail.com\" in the \"To\" field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "User enters \"PFA document\" in the \"Subject\" field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "User clicks on \"Attachment Link\"",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "User upload \"Document1\" document",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "User clicks on \"Attachment Link\"",
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "User upload \"Document2\" document",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "User clicks on \"Send button\"",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "User verifies \"Message sent\" text on \"Home\" page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Gmail",
      "offset": 15
    }
  ],
  "location": "ComposeFunctionSteps.user_launches_page(String)"
});
formatter.result({
  "duration": 4385839600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gmail",
      "offset": 23
    }
  ],
  "location": "ComposeFunctionSteps.user_should_be_page(String)"
});
formatter.result({
  "duration": 11461500,
  "status": "passed"
});
formatter.match({
  "location": "ComposeFunctionSteps.user_provides_correct_credentials_and_logs_in_to_Gmail()"
});
formatter.result({
  "duration": 17930550100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compose",
      "offset": 16
    },
    {
      "val": "displayed",
      "offset": 36
    },
    {
      "val": "Home",
      "offset": 51
    }
  ],
  "location": "ComposeFunctionSteps.user_validates_button_is_on_page(String,String,String)"
});
formatter.result({
  "duration": 141455600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compose button",
      "offset": 16
    }
  ],
  "location": "ComposeFunctionSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 1363932500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyze@gmail.com",
      "offset": 13
    },
    {
      "val": "To",
      "offset": 37
    }
  ],
  "location": "ComposeFunctionSteps.user_enters_in_the_field(String,String)"
});
formatter.result({
  "duration": 1356883900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz100@gmail.com",
      "offset": 13
    },
    {
      "val": "To",
      "offset": 39
    }
  ],
  "location": "ComposeFunctionSteps.user_enters_in_the_field(String,String)"
});
formatter.result({
  "duration": 552470800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PFA document",
      "offset": 13
    },
    {
      "val": "Subject",
      "offset": 35
    }
  ],
  "location": "ComposeFunctionSteps.user_enters_in_the_field(String,String)"
});
formatter.result({
  "duration": 323880000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Attachment Link",
      "offset": 16
    }
  ],
  "location": "ComposeFunctionSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 306132000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document1",
      "offset": 13
    }
  ],
  "location": "ComposeFunctionSteps.user_upload_document(String)"
});
formatter.result({
  "duration": 17517558600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Attachment Link",
      "offset": 16
    }
  ],
  "location": "ComposeFunctionSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 264591200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document2",
      "offset": 13
    }
  ],
  "location": "ComposeFunctionSteps.user_upload_document(String)"
});
formatter.result({
  "duration": 7975700800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Send button",
      "offset": 16
    }
  ],
  "location": "ComposeFunctionSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 422990900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Message sent",
      "offset": 15
    },
    {
      "val": "Home",
      "offset": 38
    }
  ],
  "location": "ComposeFunctionSteps.user_verifies_text_on_page(String,String)"
});
formatter.result({
  "duration": 2570097700,
  "status": "passed"
});
formatter.after({
  "duration": 550079900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 94,
  "name": "TC06_Verifying alert error when subject is not available and still able to send mail",
  "description": "",
  "id": "gmail-compose-function-validity;tc06-verifying-alert-error-when-subject-is-not-available-and-still-able-to-send-mail",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 93,
      "name": "@VerifyingAlertErrorWhenNoSubject"
    }
  ]
});
formatter.step({
  "line": 95,
  "name": "User launches \"Gmail\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 96,
  "name": "User should be on the \"Gmail\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 97,
  "name": "User provides correct credentials and logs in to Gmail",
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "User validates \"Compose\" button is \"displayed\" on \"Home\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "User clicks on \"Compose button\"",
  "keyword": "When "
});
formatter.step({
  "line": 100,
  "name": "User enters \"\u003cRecipient EmailAddres\u003e\" in the \"To\" field",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "User enters \"\u003cSubject\u003e\" in the \"Subject\" field",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 102,
      "value": "#When User clicks on \"Attachment Link\""
    },
    {
      "line": 103,
      "value": "#And User upload \"Document\" document"
    }
  ],
  "line": 104,
  "name": "User clicks on \"Send button\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 105,
      "value": "#And User verifies alert message \"Send this message without a subject or text in the body?\""
    }
  ],
  "line": 106,
  "name": "User verifies and \"accept\" alert \"Send this message without a subject or text in the body?\"",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "User verifies \"Message sent.\" text on \"Home\" page",
  "keyword": "And "
});
formatter.examples({
  "line": 109,
  "name": "",
  "description": "",
  "id": "gmail-compose-function-validity;tc06-verifying-alert-error-when-subject-is-not-available-and-still-able-to-send-mail;",
  "rows": [
    {
      "cells": [
        "Recipient EmailAddres",
        "Subject"
      ],
      "line": 110,
      "id": "gmail-compose-function-validity;tc06-verifying-alert-error-when-subject-is-not-available-and-still-able-to-send-mail;;1"
    },
    {
      "cells": [
        "xyz@gmail.com",
        ""
      ],
      "line": 111,
      "id": "gmail-compose-function-validity;tc06-verifying-alert-error-when-subject-is-not-available-and-still-able-to-send-mail;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2514611700,
  "status": "passed"
});
formatter.scenario({
  "line": 111,
  "name": "TC06_Verifying alert error when subject is not available and still able to send mail",
  "description": "",
  "id": "gmail-compose-function-validity;tc06-verifying-alert-error-when-subject-is-not-available-and-still-able-to-send-mail;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ComposeFunctionalitytest"
    },
    {
      "line": 93,
      "name": "@VerifyingAlertErrorWhenNoSubject"
    }
  ]
});
formatter.step({
  "line": 95,
  "name": "User launches \"Gmail\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 96,
  "name": "User should be on the \"Gmail\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 97,
  "name": "User provides correct credentials and logs in to Gmail",
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "User validates \"Compose\" button is \"displayed\" on \"Home\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "User clicks on \"Compose button\"",
  "keyword": "When "
});
formatter.step({
  "line": 100,
  "name": "User enters \"xyz@gmail.com\" in the \"To\" field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "User enters \"\" in the \"Subject\" field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 102,
      "value": "#When User clicks on \"Attachment Link\""
    },
    {
      "line": 103,
      "value": "#And User upload \"Document\" document"
    }
  ],
  "line": 104,
  "name": "User clicks on \"Send button\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 105,
      "value": "#And User verifies alert message \"Send this message without a subject or text in the body?\""
    }
  ],
  "line": 106,
  "name": "User verifies and \"accept\" alert \"Send this message without a subject or text in the body?\"",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "User verifies \"Message sent.\" text on \"Home\" page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Gmail",
      "offset": 15
    }
  ],
  "location": "ComposeFunctionSteps.user_launches_page(String)"
});
formatter.result({
  "duration": 4259312700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gmail",
      "offset": 23
    }
  ],
  "location": "ComposeFunctionSteps.user_should_be_page(String)"
});
formatter.result({
  "duration": 7896000,
  "status": "passed"
});
formatter.match({
  "location": "ComposeFunctionSteps.user_provides_correct_credentials_and_logs_in_to_Gmail()"
});
formatter.result({
  "duration": 16698768300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compose",
      "offset": 16
    },
    {
      "val": "displayed",
      "offset": 36
    },
    {
      "val": "Home",
      "offset": 51
    }
  ],
  "location": "ComposeFunctionSteps.user_validates_button_is_on_page(String,String,String)"
});
formatter.result({
  "duration": 384514500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compose button",
      "offset": 16
    }
  ],
  "location": "ComposeFunctionSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 1839065400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz@gmail.com",
      "offset": 13
    },
    {
      "val": "To",
      "offset": 36
    }
  ],
  "location": "ComposeFunctionSteps.user_enters_in_the_field(String,String)"
});
formatter.result({
  "duration": 2369955000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    },
    {
      "val": "Subject",
      "offset": 23
    }
  ],
  "location": "ComposeFunctionSteps.user_enters_in_the_field(String,String)"
});
formatter.result({
  "duration": 429568000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Send button",
      "offset": 16
    }
  ],
  "location": "ComposeFunctionSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 302875400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "accept",
      "offset": 19
    },
    {
      "val": "Send this message without a subject or text in the body?",
      "offset": 34
    }
  ],
  "location": "ComposeFunctionSteps.user_verifies_and_alert(String,String)"
});
formatter.result({
  "duration": 338349400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Message sent.",
      "offset": 15
    },
    {
      "val": "Home",
      "offset": 39
    }
  ],
  "location": "ComposeFunctionSteps.user_verifies_text_on_page(String,String)"
});
formatter.result({
  "duration": 4191337300,
  "status": "passed"
});
formatter.after({
  "duration": 617384100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 115,
  "name": "TC07_Verifying error when recipient address is not available",
  "description": "",
  "id": "gmail-compose-function-validity;tc07-verifying-error-when-recipient-address-is-not-available",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 114,
      "name": "@VerifyingErrorWhenNoToAddress"
    }
  ]
});
formatter.step({
  "line": 116,
  "name": "User launches \"Gmail\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 117,
  "name": "User should be on the \"Gmail\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 118,
  "name": "User provides correct credentials and logs in to Gmail",
  "keyword": "When "
});
formatter.step({
  "line": 119,
  "name": "User validates \"Compose\" button is \"displayed\" on \"Home\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 120,
  "name": "User clicks on \"Compose button\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 121,
      "value": "#And User enters \"\u003cRecipient EmailAddres\u003e\" in the \"To\" field"
    }
  ],
  "line": 122,
  "name": "User enters \"\u003cSubject\u003e\" in the \"Subject\" field",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "User clicks on \"Attachment Link\"",
  "keyword": "When "
});
formatter.step({
  "line": 124,
  "name": "User upload \"Document1\" document",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "User clicks on \"Send button\"",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "User verifies \"Please specify at least one recipient.\" text on \"Home\" page",
  "keyword": "And "
});
formatter.examples({
  "line": 128,
  "name": "",
  "description": "",
  "id": "gmail-compose-function-validity;tc07-verifying-error-when-recipient-address-is-not-available;",
  "rows": [
    {
      "cells": [
        "Recipient EmailAddres",
        "Subject"
      ],
      "line": 129,
      "id": "gmail-compose-function-validity;tc07-verifying-error-when-recipient-address-is-not-available;;1"
    },
    {
      "cells": [
        "xyz@gmail.com",
        "PFA document"
      ],
      "line": 130,
      "id": "gmail-compose-function-validity;tc07-verifying-error-when-recipient-address-is-not-available;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2275813400,
  "status": "passed"
});
formatter.scenario({
  "line": 130,
  "name": "TC07_Verifying error when recipient address is not available",
  "description": "",
  "id": "gmail-compose-function-validity;tc07-verifying-error-when-recipient-address-is-not-available;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 114,
      "name": "@VerifyingErrorWhenNoToAddress"
    },
    {
      "line": 1,
      "name": "@ComposeFunctionalitytest"
    }
  ]
});
formatter.step({
  "line": 116,
  "name": "User launches \"Gmail\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 117,
  "name": "User should be on the \"Gmail\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 118,
  "name": "User provides correct credentials and logs in to Gmail",
  "keyword": "When "
});
formatter.step({
  "line": 119,
  "name": "User validates \"Compose\" button is \"displayed\" on \"Home\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 120,
  "name": "User clicks on \"Compose button\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 121,
      "value": "#And User enters \"\u003cRecipient EmailAddres\u003e\" in the \"To\" field"
    }
  ],
  "line": 122,
  "name": "User enters \"PFA document\" in the \"Subject\" field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "User clicks on \"Attachment Link\"",
  "keyword": "When "
});
formatter.step({
  "line": 124,
  "name": "User upload \"Document1\" document",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "User clicks on \"Send button\"",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "User verifies \"Please specify at least one recipient.\" text on \"Home\" page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Gmail",
      "offset": 15
    }
  ],
  "location": "ComposeFunctionSteps.user_launches_page(String)"
});
formatter.result({
  "duration": 3581936100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gmail",
      "offset": 23
    }
  ],
  "location": "ComposeFunctionSteps.user_should_be_page(String)"
});
formatter.result({
  "duration": 9625600,
  "status": "passed"
});
formatter.match({
  "location": "ComposeFunctionSteps.user_provides_correct_credentials_and_logs_in_to_Gmail()"
});
formatter.result({
  "duration": 16862599799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compose",
      "offset": 16
    },
    {
      "val": "displayed",
      "offset": 36
    },
    {
      "val": "Home",
      "offset": 51
    }
  ],
  "location": "ComposeFunctionSteps.user_validates_button_is_on_page(String,String,String)"
});
formatter.result({
  "duration": 524733501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compose button",
      "offset": 16
    }
  ],
  "location": "ComposeFunctionSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 1990276000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PFA document",
      "offset": 13
    },
    {
      "val": "Subject",
      "offset": 35
    }
  ],
  "location": "ComposeFunctionSteps.user_enters_in_the_field(String,String)"
});
formatter.result({
  "duration": 2186442201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Attachment Link",
      "offset": 16
    }
  ],
  "location": "ComposeFunctionSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 317446600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document1",
      "offset": 13
    }
  ],
  "location": "ComposeFunctionSteps.user_upload_document(String)"
});
formatter.result({
  "duration": 17576051099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Send button",
      "offset": 16
    }
  ],
  "location": "ComposeFunctionSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 292262999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please specify at least one recipient.",
      "offset": 15
    },
    {
      "val": "Home",
      "offset": 64
    }
  ],
  "location": "ComposeFunctionSteps.user_verifies_text_on_page(String,String)"
});
formatter.result({
  "duration": 71249300,
  "status": "passed"
});
formatter.after({
  "duration": 686385199,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 134,
  "name": "TC08_Verifying error when emailAddress is not valid",
  "description": "",
  "id": "gmail-compose-function-validity;tc08-verifying-error-when-emailaddress-is-not-valid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 133,
      "name": "@VerifyingErrorWhenToEmailisNotvalid"
    }
  ]
});
formatter.step({
  "line": 135,
  "name": "User launches \"Gmail\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 136,
  "name": "User should be on the \"Gmail\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 137,
  "name": "User provides correct credentials and logs in to Gmail",
  "keyword": "When "
});
formatter.step({
  "line": 138,
  "name": "User validates \"Compose\" button is \"displayed\" on \"Home\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 139,
  "name": "User clicks on \"Compose button\"",
  "keyword": "When "
});
formatter.step({
  "line": 140,
  "name": "User enters \"\u003cRecipient EmailAddres\u003e\" in the \"To\" field",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "User enters \"\u003cSubject\u003e\" in the \"Subject\" field",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "User clicks on \"Attachment Link\"",
  "keyword": "When "
});
formatter.step({
  "line": 143,
  "name": "User upload \"Document1\" document",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "User clicks on \"Send button\"",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "User verifies \"Please make sure that all addresses are properly formed.\" text on \"Home\" page",
  "keyword": "And "
});
formatter.examples({
  "line": 147,
  "name": "",
  "description": "",
  "id": "gmail-compose-function-validity;tc08-verifying-error-when-emailaddress-is-not-valid;",
  "rows": [
    {
      "cells": [
        "Recipient EmailAddres",
        "Subject"
      ],
      "line": 148,
      "id": "gmail-compose-function-validity;tc08-verifying-error-when-emailaddress-is-not-valid;;1"
    },
    {
      "cells": [
        "@@@@@",
        "PFA document"
      ],
      "line": 149,
      "id": "gmail-compose-function-validity;tc08-verifying-error-when-emailaddress-is-not-valid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2357777601,
  "status": "passed"
});
formatter.scenario({
  "line": 149,
  "name": "TC08_Verifying error when emailAddress is not valid",
  "description": "",
  "id": "gmail-compose-function-validity;tc08-verifying-error-when-emailaddress-is-not-valid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 133,
      "name": "@VerifyingErrorWhenToEmailisNotvalid"
    },
    {
      "line": 1,
      "name": "@ComposeFunctionalitytest"
    }
  ]
});
formatter.step({
  "line": 135,
  "name": "User launches \"Gmail\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 136,
  "name": "User should be on the \"Gmail\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 137,
  "name": "User provides correct credentials and logs in to Gmail",
  "keyword": "When "
});
formatter.step({
  "line": 138,
  "name": "User validates \"Compose\" button is \"displayed\" on \"Home\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 139,
  "name": "User clicks on \"Compose button\"",
  "keyword": "When "
});
formatter.step({
  "line": 140,
  "name": "User enters \"@@@@@\" in the \"To\" field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "User enters \"PFA document\" in the \"Subject\" field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "User clicks on \"Attachment Link\"",
  "keyword": "When "
});
formatter.step({
  "line": 143,
  "name": "User upload \"Document1\" document",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "User clicks on \"Send button\"",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "User verifies \"Please make sure that all addresses are properly formed.\" text on \"Home\" page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Gmail",
      "offset": 15
    }
  ],
  "location": "ComposeFunctionSteps.user_launches_page(String)"
});
formatter.result({
  "duration": 5118647901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gmail",
      "offset": 23
    }
  ],
  "location": "ComposeFunctionSteps.user_should_be_page(String)"
});
formatter.result({
  "duration": 12517600,
  "status": "passed"
});
formatter.match({
  "location": "ComposeFunctionSteps.user_provides_correct_credentials_and_logs_in_to_Gmail()"
});
formatter.result({
  "duration": 17393456701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compose",
      "offset": 16
    },
    {
      "val": "displayed",
      "offset": 36
    },
    {
      "val": "Home",
      "offset": 51
    }
  ],
  "location": "ComposeFunctionSteps.user_validates_button_is_on_page(String,String,String)"
});
formatter.result({
  "duration": 270122500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compose button",
      "offset": 16
    }
  ],
  "location": "ComposeFunctionSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 1257170500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "@@@@@",
      "offset": 13
    },
    {
      "val": "To",
      "offset": 28
    }
  ],
  "location": "ComposeFunctionSteps.user_enters_in_the_field(String,String)"
});
formatter.result({
  "duration": 1194714799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PFA document",
      "offset": 13
    },
    {
      "val": "Subject",
      "offset": 35
    }
  ],
  "location": "ComposeFunctionSteps.user_enters_in_the_field(String,String)"
});
formatter.result({
  "duration": 425614599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Attachment Link",
      "offset": 16
    }
  ],
  "location": "ComposeFunctionSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 333933699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document1",
      "offset": 13
    }
  ],
  "location": "ComposeFunctionSteps.user_upload_document(String)"
});
formatter.result({
  "duration": 17490109800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Send button",
      "offset": 16
    }
  ],
  "location": "ComposeFunctionSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 357646400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please make sure that all addresses are properly formed.",
      "offset": 15
    },
    {
      "val": "Home",
      "offset": 82
    }
  ],
  "location": "ComposeFunctionSteps.user_verifies_text_on_page(String,String)"
});
formatter.result({
  "duration": 49397100,
  "status": "passed"
});
formatter.after({
  "duration": 766043899,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 153,
  "name": "TC09_Verifying CC and BCC field and sendgin mails",
  "description": "",
  "id": "gmail-compose-function-validity;tc09-verifying-cc-and-bcc-field-and-sendgin-mails",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 152,
      "name": "@VerifyingComposeforCCandBCC"
    }
  ]
});
formatter.step({
  "line": 154,
  "name": "User launches \"Gmail\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 155,
  "name": "User should be on the \"Gmail\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 156,
  "name": "User provides correct credentials and logs in to Gmail",
  "keyword": "When "
});
formatter.step({
  "line": 157,
  "name": "User validates \"Compose\" button is \"displayed\" on \"Home\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 158,
  "name": "User clicks on \"Compose button\"",
  "keyword": "When "
});
formatter.step({
  "line": 159,
  "name": "User validates \"Cc\" button is \"displayed\" on \"Home\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 160,
  "name": "User validates \"Bcc\" button is \"displayed\" on \"Home\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 161,
  "name": "User enters \"\u003cRecipient EmailAddres\u003e\" in the \"To\" field",
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "User enters \"\u003cCC EmailAddres\u003e\" in the \"Cc\" field",
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "User enters \"\u003cBCC EmailAddres\u003e\" in the \"Bcc\" field",
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "User enters \"\u003cSubject\u003e\" in the \"Subject\" field",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "User clicks on \"Attachment Link\"",
  "keyword": "When "
});
formatter.step({
  "line": 166,
  "name": "User upload \"Document1\" document",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "User clicks on \"Send button\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 168,
      "value": "#And User verifies alert message \"Send this message without a subject or text in the body?\""
    },
    {
      "line": 169,
      "value": "#And User verifies and \"accept\" alert \"Send this message without a subject or text in the body?\""
    }
  ],
  "line": 170,
  "name": "User verifies \"Message sent.\" text on \"Home\" page",
  "keyword": "And "
});
formatter.examples({
  "line": 172,
  "name": "",
  "description": "",
  "id": "gmail-compose-function-validity;tc09-verifying-cc-and-bcc-field-and-sendgin-mails;",
  "rows": [
    {
      "cells": [
        "Recipient EmailAddres",
        "Subject",
        "CC EmailAddres",
        "BCC EmailAddres"
      ],
      "line": 173,
      "id": "gmail-compose-function-validity;tc09-verifying-cc-and-bcc-field-and-sendgin-mails;;1"
    },
    {
      "cells": [
        "xyz@gmail.com",
        "CcBcc validation",
        "xyz100@gmail.com",
        "wxy100@gmail.com"
      ],
      "line": 174,
      "id": "gmail-compose-function-validity;tc09-verifying-cc-and-bcc-field-and-sendgin-mails;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2055963600,
  "status": "passed"
});
formatter.scenario({
  "line": 174,
  "name": "TC09_Verifying CC and BCC field and sendgin mails",
  "description": "",
  "id": "gmail-compose-function-validity;tc09-verifying-cc-and-bcc-field-and-sendgin-mails;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 152,
      "name": "@VerifyingComposeforCCandBCC"
    },
    {
      "line": 1,
      "name": "@ComposeFunctionalitytest"
    }
  ]
});
formatter.step({
  "line": 154,
  "name": "User launches \"Gmail\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 155,
  "name": "User should be on the \"Gmail\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 156,
  "name": "User provides correct credentials and logs in to Gmail",
  "keyword": "When "
});
formatter.step({
  "line": 157,
  "name": "User validates \"Compose\" button is \"displayed\" on \"Home\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 158,
  "name": "User clicks on \"Compose button\"",
  "keyword": "When "
});
formatter.step({
  "line": 159,
  "name": "User validates \"Cc\" button is \"displayed\" on \"Home\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 160,
  "name": "User validates \"Bcc\" button is \"displayed\" on \"Home\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 161,
  "name": "User enters \"xyz@gmail.com\" in the \"To\" field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "User enters \"xyz100@gmail.com\" in the \"Cc\" field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "User enters \"wxy100@gmail.com\" in the \"Bcc\" field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "User enters \"CcBcc validation\" in the \"Subject\" field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "User clicks on \"Attachment Link\"",
  "keyword": "When "
});
formatter.step({
  "line": 166,
  "name": "User upload \"Document1\" document",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "User clicks on \"Send button\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 168,
      "value": "#And User verifies alert message \"Send this message without a subject or text in the body?\""
    },
    {
      "line": 169,
      "value": "#And User verifies and \"accept\" alert \"Send this message without a subject or text in the body?\""
    }
  ],
  "line": 170,
  "name": "User verifies \"Message sent.\" text on \"Home\" page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Gmail",
      "offset": 15
    }
  ],
  "location": "ComposeFunctionSteps.user_launches_page(String)"
});
formatter.result({
  "duration": 4565644501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gmail",
      "offset": 23
    }
  ],
  "location": "ComposeFunctionSteps.user_should_be_page(String)"
});
formatter.result({
  "duration": 8606200,
  "status": "passed"
});
formatter.match({
  "location": "ComposeFunctionSteps.user_provides_correct_credentials_and_logs_in_to_Gmail()"
});
formatter.result({
  "duration": 17506058901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compose",
      "offset": 16
    },
    {
      "val": "displayed",
      "offset": 36
    },
    {
      "val": "Home",
      "offset": 51
    }
  ],
  "location": "ComposeFunctionSteps.user_validates_button_is_on_page(String,String,String)"
});
formatter.result({
  "duration": 367449699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compose button",
      "offset": 16
    }
  ],
  "location": "ComposeFunctionSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 1176268901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cc",
      "offset": 16
    },
    {
      "val": "displayed",
      "offset": 31
    },
    {
      "val": "Home",
      "offset": 46
    }
  ],
  "location": "ComposeFunctionSteps.user_validates_button_is_on_page(String,String,String)"
});
formatter.result({
  "duration": 1242445500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bcc",
      "offset": 16
    },
    {
      "val": "displayed",
      "offset": 32
    },
    {
      "val": "Home",
      "offset": 47
    }
  ],
  "location": "ComposeFunctionSteps.user_validates_button_is_on_page(String,String,String)"
});
formatter.result({
  "duration": 206788800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz@gmail.com",
      "offset": 13
    },
    {
      "val": "To",
      "offset": 36
    }
  ],
  "location": "ComposeFunctionSteps.user_enters_in_the_field(String,String)"
});
formatter.result({
  "duration": 474189900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz100@gmail.com",
      "offset": 13
    },
    {
      "val": "Cc",
      "offset": 39
    }
  ],
  "location": "ComposeFunctionSteps.user_enters_in_the_field(String,String)"
});
formatter.result({
  "duration": 1333000100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wxy100@gmail.com",
      "offset": 13
    },
    {
      "val": "Bcc",
      "offset": 39
    }
  ],
  "location": "ComposeFunctionSteps.user_enters_in_the_field(String,String)"
});
formatter.result({
  "duration": 586231099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CcBcc validation",
      "offset": 13
    },
    {
      "val": "Subject",
      "offset": 39
    }
  ],
  "location": "ComposeFunctionSteps.user_enters_in_the_field(String,String)"
});
formatter.result({
  "duration": 354087200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Attachment Link",
      "offset": 16
    }
  ],
  "location": "ComposeFunctionSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 317481100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document1",
      "offset": 13
    }
  ],
  "location": "ComposeFunctionSteps.user_upload_document(String)"
});
formatter.result({
  "duration": 7934242899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Send button",
      "offset": 16
    }
  ],
  "location": "ComposeFunctionSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 472138201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Message sent.",
      "offset": 15
    },
    {
      "val": "Home",
      "offset": 39
    }
  ],
  "location": "ComposeFunctionSteps.user_verifies_text_on_page(String,String)"
});
formatter.result({
  "duration": 3124474600,
  "status": "passed"
});
formatter.after({
  "duration": 739480100,
  "status": "passed"
});
});