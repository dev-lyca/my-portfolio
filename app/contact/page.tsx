"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Facebook, Github, Loader2, Mail, Phone, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ChangeEvent, FormEvent, useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("Message sent ✅");
        setForm({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error(err);
      setStatus("Failed to send");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative container mx-auto px-6 py-12 mt-20 lg:mt-10 flex flex-col items-center">
      <section className="text-center mb-12 mx-auto space-y-2">
        <motion.h1
          className="text-5xl font-extrabold tracking-wide uppercase "
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Contact Me
        </motion.h1>
        <motion.p
          className="text-muted-foreground max-w-lg mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Have a project in mind or just want to say hi? Drop me a message!
        </motion.p>
      </section>

      <div className="p-8 max-w-5xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Card className="p-8">
            <div className="flex justify-center gap-6 mt-6">
              <Link
                href="https://www.facebook.com/lyca.may11/"
                target="_blank"
                className="hover:text-blue-600 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </Link>

              <Link
                href="mailto:noblezalycamay18@mail.com"
                className="hover:text-red-600 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </Link>

              <Link
                href="https://t.me/lycanobleza"
                target="_blank"
                className="hover:text-sky-500 transition-colors"
              >
                <Send className="w-6 h-6" />
              </Link>

              <Link
                href="https://wa.me/09151949345"
                target="_blank"
                className="hover:text-green-500 transition-colors"
              >
                <Phone className="w-6 h-6" />
              </Link>

              <Link
                href="https://github.com/dev-lyca"
                target="_blank"
                className="hover:text-gray-800 transition-colors"
              >
                <Github className="w-6 h-6" />
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="mb-1">
                    Name
                  </Label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="mb-1">
                    Email
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="mb-1">
                    Message
                  </Label>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <p className="text-sm mt-2">{status}</p>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </motion.div>
          </Card>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden flex-col items-center space-y-6 lg:flex"
          >
            <div className="overflow-hidden">
              <Image
                src="/images/contact.png"
                alt="Contact Light"
                width={400}
                height={300}
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
