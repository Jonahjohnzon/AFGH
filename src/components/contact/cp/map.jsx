import React from "react";

const Maps = () => {
  return (
    <div className=" pb-10 bg-dak">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4861.3884289850575!2d3.3377230758329475!3d6.593987293399756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b933c91232d45%3A0xd6ebe2709ef7ce0d!2sIkeja%20computer%20village!5e1!3m2!1sen!2sng!4v1696688235347!5m2!1sen!2sng"
        className=" w-full h-[550px]"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Maps;
