import React from "react";

const GoogleMap = () => {
  return (
    <>
      <div className="map-area">
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2646.8288827683186!2d-123.36207488437536!3d48.44062387924871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f73811b3b8513%3A0x968aa5572a89f353!2s210-2750%20Quadra%20St%2C%20Victoria%2C%20BC%20V8T%204E8%2C%20Canada!5e0!3m2!1sen!2sbd!4v1607418551666!5m2!1sen!2sbd"
          height="550"
        ></iframe> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15066.419430783995!2d72.8684654803955!3d19.256045385353378!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0ed8075e373%3A0xb6ec9434bd69c7fd!2sSimson%20Pharma%20Limited!5e0!3m2!1sen!2sin!4v1702115211350!5m2!1sen!2sin" 
        width="800"
         height="600" 
         style={{"border":"0"}} 
         allowFullScreen="" 
         loading="lazy" 
         referrerPolicy="no-referrer-when-downgrade">

         </iframe>
      </div>
    </>
  );
};

export default GoogleMap;