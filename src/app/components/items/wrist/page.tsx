import Image from "next/image";
import React from "react";

const Wrist = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Wrist Watches
            </h1>
            <div className="h-1 w-20 bg-orange-800 rounded" />
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-orange-800">
            Our wristwatches are designed to blend style, precision, and quality
            seamlessly. Crafted with premium materials, they offer durability
            and elegance for any occasion. Whether you prefer minimalist designs
            or bold statements, our collection has something to suit your unique
            style.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/wrist1.jpeg"
                alt="content"
                width={400}
                height={300}
                quality={100}
              />
              <h3 className="tracking-widest text-orange-900 text-xs font-medium title-font">
                HAND WATCHES
              </h3>
              <h2 className="text-lg text-orange-800 font-medium title-font mb-4">
                Wrist Watch
              </h2>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/wrist2.jpeg"
                alt="content"
                width={400}
                height={300}
                quality={100}
              />
              <h3 className="tracking-widest text-orange-900 text-xs font-medium title-font">
                HAND WATCHES
              </h3>
              <h2 className="text-lg text-orange-800 font-medium title-font mb-4">
                Wrist Watch
              </h2>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/wrist3.jpeg"
                alt="content"
                width={400}
                height={300}
                quality={100}
              />
              <h3 className="tracking-widest text-orange-900 text-xs font-medium title-font">
                HAND WATCHES
              </h3>
              <h2 className="text-lg text-orange-800 font-medium title-font mb-4">
                Wrist Watch
              </h2>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/wrist4.jpeg"
                alt="content"
                width={400}
                height={300}
                quality={100}
              />
              <h3 className="tracking-widest text-orange-900 text-xs font-medium title-font">
                HAND WATCHES
              </h3>
              <h2 className="text-lg text-orange-800 font-medium title-font mb-4">
                Wrist Watch
              </h2>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/wrist5.jpeg"
                alt="content"
                width={400}
                height={300}
                quality={100}
              />
              <h3 className="tracking-widest text-orange-900 text-xs font-medium title-font">
                HAND WATCHES
              </h3>
              <h2 className="text-lg text-orange-800 font-medium title-font mb-4">
                Wrist Watch
              </h2>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/wrist6.jpeg"
                alt="content"
                width={400}
                height={300}
                quality={100}
              />
              <h3 className="tracking-widest text-orange-900 text-xs font-medium title-font">
                HAND WATCHES
              </h3>
              <h2 className="text-lg text-orange-800 font-medium title-font mb-4">
                Wrist Watch
              </h2>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/wrist7.jpeg"
                alt="content"
                width={400}
                height={300}
                quality={100}
              />
              <h3 className="tracking-widest text-orange-900 text-xs font-medium title-font">
                HAND WATCHES
              </h3>
              <h2 className="text-lg text-orange-800 font-medium title-font mb-4">
                Wrist Watch
              </h2>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/wrist8.jpeg"
                alt="content"
                width={400}
                height={300}
                quality={100}
              />
              <h3 className="tracking-widest text-orange-900 text-xs font-medium title-font">
                HAND WATCHES
              </h3>
              <h2 className="text-lg text-orange-800 font-medium title-font mb-4">
                Wrist Watch
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wrist;
