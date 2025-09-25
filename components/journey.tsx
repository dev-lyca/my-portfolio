"use client";

import { timeline } from "@/data/timeline";
import { TimelineItem } from "@/types/timeline";
import { motion } from "framer-motion";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function JourneyPage() {
  const items: TimelineItem[] = timeline;

  return (
    <main className="relative py-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="text-4xl text-center font-bold mb-6"
      >
        Journey
      </motion.h1>

      <section className="space-y-10 ">
        {items.map((item, i) => {
          const Icon = item.icon;
          const isLeft = i % 2 === 0; 

          return (
            <motion.div
              key={item.year + i}
              initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative bg-gradient-to-bl p-4 rounded-xl cursor-pointer 
                flex flex-col items-start  ${
                  isLeft ? "lg:flex-row gap-6" : "lg:flex-row-reverse gap-10"
                }`}
            >
              <div className="flex-1 space-y-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-background border shadow mb-2">
                  <Icon className="w-5 h-5 text-primary" />
                </span>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  {item.year} — {item.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </div>

              <div className="w-full lg:w-80 flex-shrink-0">
                {item.images.length > 0 ? (
                  <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                  >
                    {item.images.map((img, idx) => (
                      <SwiperSlide key={idx}>
                        <div className="relative w-full h-48 overflow-hidden shadow-md">
                          <Image
                            src={img}
                            alt={`${item.title} screenshot`}
                            fill
                            className="object-cover rounded-bl-4xl rounded-tr-4xl"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <div className="relative w-full h-48 overflow-hidden shadow-md">
                    <Image
                      src="/images/fallback.jpg"
                      alt="fallback"
                      fill
                      className="object-cover rounded-bl-4xl rounded-tr-4xl"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </section>
    </main>
  );
}
