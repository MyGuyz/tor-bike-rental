
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Bike } from "lucide-react";
import { motion } from "framer-motion";

export default function BikeBookingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-6">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          จองรถมอเตอร์ไซค์
        </h1>

        <Card className="rounded-2xl shadow-xl p-4">
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                วันที่รับรถ
              </label>
              <div className="relative mt-1">
                <input
                  type="date"
                  className="w-full rounded-xl border p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <CalendarDays className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                วันที่     คืนรถ
              </label>
              <div className="relative mt-1">
                <input
                  type="date"
                  className="w-full rounded-xl border p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <CalendarDays className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-600">
                รุ่นรถที่ต้องการจอง
              </label>
              <select className="mt-1 w-full rounded-xl border p-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option>Honda Click 125i</option>
                <option>Yamaha Aerox</option>
                <option>Honda PCX 160</option>
              </select>
            </div>

            <div className="md:col-span-2 text-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-2 text-lg shadow-md">
                <Bike className="inline-block mr-2" size={18} /> ยืนยันการจอง
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
