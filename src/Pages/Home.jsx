import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Slider from "../Components/Slider";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import Spinner from "../Components/Spinner";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Slider />
    </div>
  );
}
