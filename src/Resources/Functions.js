import * as React from "react";

export const Functions = {
      isMobile: {
            Android: function () {
                  return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function () {
                  return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function () {
                  return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function () {
                  return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function () {
                  return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
            },
            any: function () {
                  return (Functions.isMobile.Android() || Functions.isMobile.BlackBerry() || Functions.isMobile.iOS() || Functions.isMobile.Opera() || Functions.isMobile.Windows());
            }
      },
      getLisOfComponenetsFromListOfStrings(eqipment) {
            var componentsList = [];
            eqipment.forEach(element => {
              componentsList.push(<li className="EqipmentElement Text">{element}</li>)
            });
            return componentsList;
          }
};