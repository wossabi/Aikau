model.jsonModel = {
   services: [
      "alfresco/services/ErrorReporter"
   ],
   widgets:[
      {
         name: "alfresco/layout/VerticalWidgets",
         config: {
            id: "LEVEL1_VERTICAL",
            widgets: [
               {
                  name: "alfresco/layout/HorizontalWidgets",
                  config: {
                     id: "LEVEL2_HORIZONTAL1",
                     widgets: [
                        {
                           name: "alfresco/layout/VerticalWidgets",
                           config: {
                              widgetMarginTop: "10",
                              widgets: [
                                 {
                                    name: "alfresco/logo/Logo",
                                    align: "left",
                                    config: {
                                       id: "SURF_LOGO1",
                                       logoSrc: "/share/res/js/alfresco/logo/css/images/surf32.jpg"
                                    }
                                 }
                              ]
                           }
                        },
                        {
                           name: "alfresco/layout/VerticalWidgets",
                           config: {
                              widgetMarginBottom: "20",
                              widgets: [
                                 {
                                    name: "alfresco/logo/Logo",
                                    align: "left",
                                    config: {
                                       id: "SURF_LOGO2",
                                       logoClasses: "surf-logo-small"
                                    }
                                 }
                              ]
                           }
                        },
                        {
                           name: "alfresco/layout/VerticalWidgets",
                           config: {
                              widgetMarginTop: "30",
                              widgetMarginBottom: "40",
                              widgets: [
                                 {
                                    name: "alfresco/logo/Logo",
                                    align: "left",
                                    config: {
                                       id: "SURF_LOGO3",
                                       logoClasses: "surf-logo-small"
                                    }
                                 }
                              ]
                           }
                        }
                     ]
                  }
               },
               {
                  id: "LEVEL2_LEFTANDRIGHT",
                  name: "alfresco/layout/LeftAndRight",
                  config: {
                     widgetsLeft: [
                        {
                           id: "SURF_LOGO4",
                           name: "alfresco/logo/Logo",
                           className: "additional-test-class",
                           config: {
                              logoClasses: "surf-logo-small"
                           }
                        },
                        {
                           id: "SURF_LOGO5",
                           name: "alfresco/logo/Logo",
                           className: "additional-test-class-2",
                           config: {
                              logoClasses: "surf-logo-small"
                           }
                        }
                     ],
                     widgetsRight: [
                        {
                           id: "ALFRESCO_LOGO1",
                           name: "alfresco/logo/Logo",
                           config: {
                              logoClasses: "alfresco-logo-only"
                           }
                        },
                        {
                           id: "ALFRESCO_LOGO2",
                           name: "alfresco/logo/Logo",
                           config: {
                              logoClasses: "surf-logo-large"
                           }
                        }
                     ]
                  }
               },
               {
                  id: "LEVEL3_LEFTANDRIGHT",
                  name: "alfresco/layout/LeftAndRight",
                  config: {
                     widgets: [
                        {
                           id: "SURF_LOGO6",
                           name: "alfresco/logo/Logo",
                           className: "additional-test-class-3",
                           align: "left",
                           config: {
                              logoClasses: "surf-logo-small"
                           }
                        },
                        {
                           id: "SURF_LOGO7",
                           name: "alfresco/logo/Logo",
                           className: "additional-test-class-4",
                           align: "left",
                           config: {
                              logoClasses: "surf-logo-small"
                           }
                        },
                        {
                           id: "ALFRESCO_LOGO3",
                           name: "alfresco/logo/Logo",
                           align: "right",
                           config: {
                              logoClasses: "alfresco-logo-only"
                           }
                        },
                        {
                           id: "ALFRESCO_LOGO4",
                           name: "alfresco/logo/Logo",
                           align: "right",
                           config: {
                              logoClasses: "surf-logo-large"
                           }
                        }
                     ]
                  }
               },
               {
                  name: "alfresco/layout/HorizontalWidgets",
                  config: {
                     id: "LEVEL2_HORIZONTAL2",
                     widgetMarginLeft: 10,
                     widgetMarginRight: 20,
                     widgets: [
                        {
                           name: "alfresco/logo/Logo",
                           config: {
                              id: "LOGO1"
                           }
                        },
                        {
                           name: "alfresco/logo/Logo",
                           widthPx: 300,
                           config: {
                              id: "LOGO2"
                           }
                        },
                        {
                           name: "alfresco/logo/Logo",
                           widthPc: 75,
                           config: {
                              id: "LOGO3"
                           }
                        }
                     ]
                  }
               },
               {
                  name: "alfresco/layout/HorizontalWidgets",
                  config: {
                     id: "LEVEL2_HORIZONTAL3",
                     widgetMarginLeft: "invalid",
                     widgetMarginRight: "invalid",
                     widgets: [
                        {
                           name: "alfresco/logo/Logo",
                           widthPx: "invalid",
                           config: {
                              id: "LOGO4"
                           }
                        },
                        {
                           name: "alfresco/logo/Logo",
                           widthPc: "invalid",
                           config: {
                              id: "LOGO5"
                           }
                        }
                     ]
                  }
               },
               {
                  name: "alfresco/layout/HorizontalWidgets",
                  config: {
                     id: "LEVEL2_HORIZONTAL4",
                     widgets: [
                        {
                           name: "alfresco/logo/Logo",
                           widthPx: 1000000,
                           config: {
                              id: "LOGO6"
                           }
                        },
                        {
                           name: "alfresco/logo/Logo",
                           widthPx: 1000000,
                           config: {
                              id: "LOGO7"
                           }
                        }
                     ]
                  }
               },
               {
                  name: "alfresco/layout/HorizontalWidgets",
                  config: {
                     id: "LEVEL2_HORIZONTAL4",
                     widgets: [
                        {
                           name: "alfresco/logo/Logo",
                           widthPc: 101,
                           config: {
                              id: "LOGO8"
                           }
                        }
                     ]
                  }
               },
		       {
		          name: "alfresco/layout/CenteredWidgets",
		          config: {
		             id: "CENTERED_WIDGETS",
		             widgets: [
		                {
		                   name: "alfresco/logo/Logo",
		                   widthPx: 200,
		                   widthCalc: 184,
		                   config: {
		                      id: "LOGO9"
		                   }
		                },
		                {
		                   name: "alfresco/logo/Logo",
		                   widthPx: 200,
		                   widthCalc: 184,
		                   config: {
		                      id: "LOGO10"
		                   }
		                }
		             ]
		          }
		       }
            ]
         }
      },
      {
         name: "alfresco/layout/HorizontalWidgets",
         config: {
            id: "EMPTY_HORIZONTAL"
         }
      },
      {
         name: "alfresco/layout/VerticalWidgets",
         config: {
            id: "EMPTY_VERTICAL"
         }
      },
      {
         name: "alfresco/layout/LeftAndRight",
         config: {
            id: "EMPTY_LEFT_AND_RIGHT"
         }
      },
      {
         name: "alfresco/layout/CenteredWidgets",
         config: {
            id: "EMPTY_CENTERED_WIDGETS"
         }
      },
      {
         name: "alfresco/logging/SubscriptionLog"
      },
      {
         name: "aikauTesting/TestCoverageResults"
      }
   ]
};