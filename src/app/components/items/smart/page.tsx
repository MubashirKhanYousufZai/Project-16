import Image from "next/image";
import React from "react";

const Smart = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Smart Watches
            </h1>
            <div className="h-1 w-20 bg-orange-800 rounded" />
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-orange-800">
          Our smartwatches combine cutting-edge technology with sleek, modern designs. 
          From fitness tracking to staying connected on the go, they offer advanced features that 
          fit seamlessly into your lifestyle. Experience innovation and style with our smartwatches.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/smart1.jpeg"
                alt="content"
                width={400}
                height={300}
                quality={100}
              />
              <h3 className="tracking-widest text-orange-900 text-xs font-medium title-font">
                HAND WATCHES
              </h3>
              <h2 className="text-lg text-orange-800 font-medium title-font mb-4">
                Smart Watch
              </h2>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/smart2.jpeg"
                alt="content"
                width={400}
                height={300}
                quality={100}
              />
              <h3 className="tracking-widest text-orange-900 text-xs font-medium title-font">
                HAND WATCHES
              </h3>
              <h2 className="text-lg text-orange-800 font-medium title-font mb-4">
                Smart Watch
              </h2>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/smart3.jpeg"
                alt="content"
                width={400}
                height={300}
                quality={100}
              />
              <h3 className="tracking-widest text-orange-900 text-xs font-medium title-font">
                HAND WATCHES
              </h3>
              <h2 className="text-lg text-orange-800 font-medium title-font mb-4">
                Smart Watch
              </h2>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/smart4.jpeg"
                alt="content"
                width={400}
                height={300}
                quality={100}
              />
              <h3 className="tracking-widest text-orange-900 text-xs font-medium title-font">
                HAND WATCHES
              </h3>
              <h2 className="text-lg text-orange-800 font-medium title-font mb-4">
                Smart Watch
              </h2>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/smart5.jpeg"
                alt="content"
                width={400}
                height={300}
                quality={100}
              />
              <h3 className="tracking-widest text-orange-900 text-xs font-medium title-font">
                HAND WATCHES
              </h3>
              <h2 className="text-lg text-orange-800 font-medium title-font mb-4">
                Smart Watch
              </h2>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/smart6.jpeg"
                alt="content"
                width={400}
                height={300}
                quality={100}
              />
              <h3 className="tracking-widest text-orange-900 text-xs font-medium title-font">
                HAND WATCHES
              </h3>
              <h2 className="text-lg text-orange-800 font-medium title-font mb-4">
                Smart Watch
              </h2>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/smart7.jpeg"
                alt="content"
                width={400}
                height={300}
                quality={100}
              />
              <h3 className="tracking-widest text-orange-900 text-xs font-medium title-font">
                HAND WATCHES
              </h3>
              <h2 className="text-lg text-orange-800 font-medium title-font mb-4">
                Smart Watch
              </h2>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/smart8.jpeg"
                alt="content"
                width={400}
                height={300}
                quality={100}
              />
              <h3 className="tracking-widest text-orange-900 text-xs font-medium title-font">
                HAND WATCHES
              </h3>
              <h2 className="text-lg text-orange-800 font-medium title-font mb-4">
                Smart Watch
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Smart;
