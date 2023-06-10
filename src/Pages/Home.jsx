import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Slider from "../Components/Slider";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import Spinner from "../Components/Spinner";
import { Link } from "react-router-dom";
import ListingItem from "../Components/ListingItem";

export default function Home() {
  // oofer listing
  const [offerListing, setOfferListing] = useState(null);
  useEffect(() => {
    async function fetchOfferListings() {
      try {
        // get reference
        const listingRef = collection(db, "listings");
        // create query
        const q = query(
          listingRef,
          where("offer", "==", true),
          orderBy("timestamp", "desc"),
          limit(4)
        );
        // execute the query
        const querySnap = await getDocs(q);
        let listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setOfferListing(listings);
        console.log(listings);
      } catch (error) {
        console.log(error);
      }
    }
    fetchOfferListings();
  }, []);

  // places for rent
  const [rentListing, setRentListing] = useState(null);
  useEffect(() => {
    async function fetchRentListings() {
      try {
        // get reference
        const listingRef = collection(db, "listings");
        // create query
        const q = query(
          listingRef,
          where("type", "==", "rent"),
          orderBy("timestamp", "desc"),
          limit(4)
        );
        // execute the query
        const querySnap = await getDocs(q);
        let listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setRentListing(listings);
      } catch (error) {
        console.log(error);
      }
    }
    fetchRentListings();
  }, []);

  // places for sale
  const [saleListing, setSaleListing] = useState(null);
  useEffect(() => {
    async function fetchSaleListings() {
      try {
        // get reference
        const listingRef = collection(db, "listings");
        // create query
        const q = query(
          listingRef,
          where("type", "==", "sale"),
          orderBy("timestamp", "desc"),
          limit(4)
        );
        // execute the query
        const querySnap = await getDocs(q);
        let listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setSaleListing(listings);
      } catch (error) {
        console.log(error);
      }
    }
    fetchSaleListings();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Slider />
      <div className="max-w-6xl mx-auto pt-4 space-y-6">
        {offerListing && offerListing.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-2xl mt-6 font-semibold">Recent Offers</h2>
            <Link to="/offers">
              <p className="px-3 text-sm text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out">
                Show More Offers
              </p>
            </Link>
            <ul className="sm:grid sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
              {offerListing.map((listing) => (
                <ListingItem
                  listing={listing.data}
                  key={listing.id}
                  id={listing.id}
                />
              ))}
            </ul>
          </div>
        )}
        {rentListing && rentListing.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-2xl mt-6 font-semibold">
              Places for rent
            </h2>
            <Link to="/category/rent">
              <p className="px-3 text-sm text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out">
                Show more places for rent
              </p>
            </Link>
            <ul className="sm:grid sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
              {rentListing.map((listing) => (
                <ListingItem
                  listing={listing.data}
                  key={listing.id}
                  id={listing.id}
                />
              ))}
            </ul>
          </div>
        )}
        {saleListing && saleListing.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-2xl mt-6 font-semibold">
              Places for sale
            </h2>
            <Link to="/category/sale">
              <p className="px-3 text-sm text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out">
                Show more places for sale
              </p>
            </Link>
            <ul className="sm:grid sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
              {saleListing.map((listing) => (
                <ListingItem
                  listing={listing.data}
                  key={listing.id}
                  id={listing.id}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
