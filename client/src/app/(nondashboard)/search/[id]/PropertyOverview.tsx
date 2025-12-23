import { useGetPropertyQuery } from "@/state/api";
import { MapPin, Star } from "lucide-react";
import React from "react";

const PropertyOverview = ({ propertyId }: PropertyOverviewProps) => {
  const {
    data: property,
    isError,
    isLoading,
  } = useGetPropertyQuery(propertyId);

  if (isLoading) return <>Loading...</>;
  if (isError || !property) {
    return <>Property not Found</>;
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-4">
        <div className="text-sm text-gray-500 mb-1">
          {property.location?.country} / {property.location?.state} /{" "}
          <span className="font-semibold text-gray-600">
            {property.location?.city}
          </span>
        </div>
        <h1 className="text-3xl font-bold my-5">{property.name}</h1>
        <div className="flex justify-between items-center">
          <span className="flex items-center text-gray-500">
            <MapPin className="w-4 h-4 mr-1 text-gray-700" />
            {property.location?.city}, {property.location?.state},{" "}
            {property.location?.country}
          </span>
          <div className="flex justify-between items-center gap-3">
            <span className="flex items-center text-yellow-500">
              <Star className="w-4 h-4 mr-1 fill-current" />
              {property.averageRating.toFixed(1)} ({property.numberOfReviews}{" "}
              Reviews)
            </span>
            <span className="text-green-600">Verified Listing</span>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="border border-primary-200 rounded-xl p-6 mb-6">
        <div className="flex justify-between items-center gap-4 px-5">
          <div>
            <div className="text-sm text-gray-500">Monthly Rent</div>
            <div className="font-semibold">
              ${property.pricePerMonth.toLocaleString()}
            </div>
          </div>
          <div className="border-l border-gray-300 h-10"></div>
          <div>
            <div className="text-sm text-gray-500">Bedrooms</div>
            <div className="font-semibold">{property.beds} bd</div>
          </div>
          <div className="border-l border-gray-300 h-10"></div>
          <div>
            <div className="text-sm text-gray-500">Bathrooms</div>
            <div className="font-semibold">{property.baths} ba</div>
          </div>
          <div className="border-l border-gray-300 h-10"></div>
          <div>
            <div className="text-sm text-gray-500">Square Feet</div>
            <div className="font-semibold">
              {property.squareFeet.toLocaleString()} sq ft
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="my-16">
        <h2 className="text-xl font-semibold mb-5">About {property.name}</h2>
        <p className="text-gray-500 leading-7">
          {property.description}
          Experience resort-style luxury at Seacrest Homes, where coastal
          tranquility and urban energy seamlessly intertwine. Our newly built
          community offers sophisticated two- and three-bedroom residences, each
          meticulously designed with high-end finishes, quartz countertops, and
          stainless steel Whirlpool appliances. Enjoy the convenience of a
          private office nook and a full-size, in-unit washer and dryer. Find
          your personal escape beside our stunning swimming pools and spas,
          complete with poolside cabanas and lavishly landscaped courtyards.
          Whether you&amps;re lounging in our indoor/outdoor entertainment spaces or
          hosting at the BBQ area, you’ll be captivated by unobstructed,
          panoramic views—stretching from the Palos Verdes Peninsula to the
          Downtown Los Angeles skyline. Elevate your daily routine in our
          state-of-the-art fitness club and yoga studio. Skip the commute and
          host your next meeting in our professional business center and
          conference room, located just steps from the internet and coffee
          lounge. Perfectly situated near Southern California’s premier beaches,
          Seacrest Homes offers effortless access to the 110, 405, and 91
          freeways. You are minutes away from world-class shopping at the Del
          Amo Fashion Center and top-tier healthcare, including Providence
          Little Company of Mary (ranked top 10 in LA), Torrance Memorial, UCLA
          Harbor, and Kaiser Permanente. Embrace the lifestyle you deserve.
          Contact us today to schedule your private tour.{" "}
        </p>
      </div>
    </div>
  );
};

export default PropertyOverview;
