model.jsonModel = {
   services: [
      {
         name: "alfresco/services/LoggingService",
         config: {
            loggingPreferences: {
               enabled: true,
               all: true
            }
         }
      },
      "alfresco/services/DialogService"
   ],
   widgets: [
      {
         id: "FORM1",
         name: "alfresco/forms/Form",
         config: {
            okButtonPublishTopic: "FORM_POST",
            scopeFormControls: false,
            widgets: [
               {
                  id: "MDWPE1",
                  name: "alfresco/forms/controls/MarkdownWithPreviewEditor",
                  config: {
                     name: "markdown1"
                  }
               }
            ]
         }
      },
      // {
      //    name: "alfresco/buttons/AlfButton",
      //    id: "DIALOG_BUTTON",
      //    config: {
      //       label: "Display editor in dialog",
      //       publishTopic: "ALF_CREATE_FORM_DIALOG_REQUEST",
      //       publishPayload: {
      //          dialogTitle: "CodeMirror Editor Dialog",
      //          formSubmissionTopic: "POST_FORM_DIALOG",
      //          contentWidth: "600px",
      //          widgets: [
      //             {
      //                id: "CODE_MIRROR_2",
      //                name: "alfresco/forms/controls/CodeMirrorEditor",
      //                config: {
      //                   name: "codeMirrorValue2"
      //                }
      //             }
      //          ]
      //       }
      //    }
      // },
      {
         name: "alfresco/logging/DebugLog"
      }
   ]
};