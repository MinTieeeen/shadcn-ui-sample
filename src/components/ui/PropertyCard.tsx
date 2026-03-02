"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./button";

const PropertyCard = () => {
  return (
    <div className="w-full min-w- max-w-6xl mx-auto p-6">
      <div>
        <Card className="relative rounded-t-xl shadow-lg border bg-white ring ring-gray-950/5 p-6 grid gap-10 lg:grid-cols-2 lg:px-20 lg:py-8 lg:pb-10 dark:bg-gray-950/90">
          <CardContent>
            <div className="relative mb-4 max-xl:-mx-4 max-xl:-mt-4">
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-4 lg:hidden">
                <img
                  src="https://tailwindcss.com/_next/static/media/responsive-1.369fbbd4.png"
                  alt=""
                  className="h-48 sm:col-span-2 w-full rounded-lg object-cover"
                />
                <img
                  src="https://tailwindcss.com/_next/static/media/responsive-2.65169238.png"
                  alt=""
                  className="max-sm:hidden h-48 col-span-2 w-full rounded-lg object-cover"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end gap-2 bg-linear-to-b from-transparent via-transparent to-gray-950 p-6 sm:hidden">
                <span className="text-sm/6 font-semibold text-white/80">
                  Entire House
                </span>
                <span className="text-xl/6 font-semibold text-white">
                  Beach House on Lake Huron
                </span>
              </div>
            </div>
            <div className="flex flex-1 flex-col">
              {/* description */}
              <div>
                <span className="text-gray-500 font-medium max-sm:hidden">
                  Entire House
                </span>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto] xl:grid-cols-1">
                  <div>
                    <span className="mt-2 text-3xl font-semibold text-gray-950 dark:text-white max-sm:hidden">
                      Beach House on Lake Huron
                    </span>
                    <span className="flex gap-2">
                      <span className="flex gap-1 text-pink-600">
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                          alt=""
                          className="size-4"
                        />
                        <span className="text-sm/6 font-medium">2.66</span>
                      </span>
                      <span className="text-gray-400 text-sm/6">
                        (166 reviews)
                      </span>
                      <span className="text-gray-400 text-sm/6">·</span>
                      <span className="text-sm/6 font-medium text-pink-600">
                        Bayfield, ON
                      </span>
                    </span>
                  </div>
                  <div className="lg:hidden">
                    <Button
                      type="button"
                      className="font-semibold bg-pink-600 p-2 text-white text-sm/6 rounded-lg w-full hover:bg-pink-500"
                    >
                      Check Availability
                    </Button>
                  </div>
                </div>
              </div>
              <div>
                <p className="mt-4 line-clamp-2 text-sm/6 text-gray-600 xl:max-w-md dark:text-gray-400">
                  This sunny and spacious room is for those traveling light and
                  looking for a comfy and cozy place to lay their head for a
                  night...
                </p>
                <span className="mt-3 inline-block shrink-0 text-sm/6 font-semibold text-pink-600 dark:text-pink-500">
                  Show more
                </span>
              </div>
              <div className="hidden mt-6 lg:block">
                <Button
                  type="button"
                  className="font-semibold bg-pink-600 p-2 text-white text-sm/6 rounded-lg hover:bg-pink-500"
                >
                  Check Availability
                </Button>
              </div>
            </div>
          </CardContent>
          {/* image */}
          <div className="grid grid-cols-4 grid-rows-2 gap-2 max-lg:hidden">
            <img
              src="https://tailwindcss.com/_next/static/media/responsive-1.369fbbd4.png"
              className="col-span-4 h-[150px] w-full rounded-lg object-cover xl:col-span-2 xl:row-span-4 xl:h-[308px]"
              alt=""
            />
            <img
              src="https://tailwindcss.com/_next/static/media/responsive-2.65169238.png"
              alt=""
              className="col-span-2 h-[150px] w-full rounded-lg xl:col-span-1 "
            />
            <img
              src="https://tailwindcss.com/_next/static/media/responsive-3.6b6101ca.png"
              alt=""
              className="col-span-2 h-[150px] w-full rounded-lg xl:col-span-1 "
            />
            <div className="xl:contents hidden">
              <img
                src="https://tailwindcss.com/_next/static/media/responsive-4.8d79e2e9.png"
                alt=""
                className="col-span-2 h-[150px] w-full rounded-lg xl:col-span-1 "
              />
              <img
                src="https://tailwindcss.com/_next/static/media/responsive-5.b042c1a4.png"
                alt=""
                className="col-span-2 h-[150px] w-full rounded-lg xl:col-span-1 "
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PropertyCard;
