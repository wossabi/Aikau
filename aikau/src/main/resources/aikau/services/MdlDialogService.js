/**
 * Copyright (C) 2005-2016 Alfresco Software Limited.
 *
 * This file is part of Alfresco
 *
 * Alfresco is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Alfresco is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Alfresco. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * <p><b>This service is in the "aikau" package and does not adhere to the backwards compatibility standards
 * of the "alfresco" package. The code in this package is intended to form the basis of the next major release
 * of Aikau and will remain in an unstable state until ready for release. Please evaluate and feedback on this
 * module but do not rely on it in production!</b></p>
 * 
 * @module aikau/services/MdlDialogService
 * @extends module:alfresco/services/DialogService
 * @author Dave Draper
 * @since 1.0.NEXT
 */
define(["dojo/_base/declare", 
        "alfresco/services/DialogService",
        "aikau/dialogs/Dialog"], 
        function(declare, DialogService, Dialog) {

   // Declare and return the class
   return declare([DialogService], {

      /**
       * Overrides the [inherited function]{@link module:alfresco/services/DialogService#createDialog}
       * to create a [Material Design dialog]{@link module:aikau/dialogs/Dialog}.
       * 
       * @instance
       * @parameter {object} config The configuration to use to create the dialog
       * @since 1.0.NEXT
       */
      createDialog: function aikau_services_MdlDialogService__createDialog(config) {
         return new Dialog(config);
      },

      /**
       * Extends the [inherited function]{@link module:alfresco/services/DialogService#createDialogConfig}
       * to swap the default buttons for Material Design buttons.
       * 
       * @instance
       * @parameter {object} config The configuration to use to create the dialog
       * @since 1.0.NEXT
       */
      createDialogConfig: function alfresco_services_DialogService__createDialogConfig() {
         var defaultConfig = this.inherited(arguments);
         if (defaultConfig.widgetsButtons)
         {
            defaultConfig.widgetsButtons.forEach(function(button) {
               button.name = "aikau/buttons/Button";
            });
         }

         return defaultConfig;
      }
   });
});