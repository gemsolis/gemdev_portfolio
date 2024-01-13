"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { socialLinks } from "../data/constant";
import Title from "../ui/Title/Title";
import Form from "../ui/Contact/Form";
import ContactsCard from "../ui/Contact/ContactsCard";

const Contact = () => {
  return (
    <div id="contacts">
      <div className="g-padding custom-bg">
        <Title title="Contacts" subtitle="Connect with Me" />
        <div className="g-margin flex w-full items-start justify-around gap-5 bg-white p-10 dark:bg-black max-lg:flex-col">
          <Form />
          <ContactsCard />
        </div>
      </div>
    </div>
  );
};

export default Contact;
