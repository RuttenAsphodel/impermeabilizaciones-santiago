/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/4Al9tgf5Gk7
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/



// import { Libre_Franklin } from 'next/font/google'
// import { Chivo } from 'next/font/google'

// Libre_Franklin({
//   subsets: ['latin'],
//   display: 'swap',
// })

// Chivo({
//   subsets: ['latin'],
//   display: 'swap',
// })

import React from 'react';
import Input from './input'
import Link from "next/link"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Textarea from "./textarea"
import { JSX, SVGProps } from 'react'
import Head from 'next/head'
import LogoSalvador from '../assets/img/salvador.jpg'
import LogoQueilen from '../assets/img/queilen.jpg'
import LogoAlma from '../assets/img/almapng.png'

export function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Head>
        <title>Impermeabilizaciones Santiago</title>
        <meta name="description" content="Impermeabilizaciones en Santiago" />
      </Head>
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <DropletIcon className="w-8 h-8" />
          <span className="text-xl font-bold">Impermeabilizaciones Santiago</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#servicios" className="hover:underline underline-offset-4" prefetch={false}>
            Servicios
          </Link>
          <Link href="#portfolio" className="hover:underline underline-offset-4" prefetch={false}>
            Proyectos
          </Link>
          <Link href="#brands" className="hover:underline underline-offset-4" prefetch={false}>
            Marcas
          </Link>
          <Link href="#contact" className="hover:underline underline-offset-4" prefetch={false}>
            Contacto
          </Link>
        </nav>
        <Button variant="secondary" className="hidden md:inline-flex">
          Escribanos
        </Button>
        <Button variant="outline" size="icon" className="md:hidden">
          <MenuIcon className="w-6 h-6" />
        </Button>
      </header>
      <main className="flex-1">
        <section className="bg-[#f5f5f5] py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold text-primary">Waterproofing Solutions You Can Trust</h1>
            <p className="text-muted-foreground text-lg">
              Impermeabilizaciones Santiago offers top-quality waterproofing services, specializing in injection
              solutions to protect your property.
            </p>
            <div className="flex justify-center gap-4">
              <Button>Learn More</Button>
              <Button variant="secondary">Get a Quote</Button>
            </div>
          </div>
        </section>
        <section id="services" className="py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-primary">Our Services</h2>
              <p className="text-muted-foreground text-lg">Discover our comprehensive waterproofing solutions.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                <DropletIcon className="w-12 h-12 text-primary" />
                <h3 className="text-xl font-bold">Injection</h3>
                <p className="text-muted-foreground">
                  Our specialized injection technique seals cracks and prevents water infiltration, ensuring
                  long-lasting protection.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                <ShieldIcon className="w-12 h-12 text-primary" />
                <h3 className="text-xl font-bold">Membrane</h3>
                <p className="text-muted-foreground">
                  Our high-quality waterproofing membranes create a durable barrier against moisture, keeping your
                  property dry.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                <BrushIcon className="w-12 h-12 text-primary" />
                <h3 className="text-xl font-bold">Coating</h3>
                <p className="text-muted-foreground">
                  Our specialized coatings provide an extra layer of protection against water damage, ensuring
                  long-lasting results.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className="py-20 px-6 md:px-12 lg:px-20 bg-[#f5f5f5]">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-primary">Our Portfolio</h2>
              <p className="text-muted-foreground text-lg">Explore our successful waterproofing projects.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src= { LogoSalvador }
                  alt= "Project 1" 
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "500/300", objectFit: "contain" }}
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold">Hospital El Salvador</h3>
                  <p className="text-muted-foreground">Successful waterproofing project for a residential building.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={ LogoQueilen}
                  alt="Project 2"
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "500/300", objectFit: "contain" }}
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold">Hospital Queilen Chiloe</h3>
                  <p className="text-muted-foreground">Effective waterproofing solution for a commercial property.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={ LogoAlma } 
                  alt="Project 3"
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "500/300", objectFit: "contain" }}
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold">Proyecto Alma</h3>
                  <p className="text-muted-foreground">Successful waterproofing project for a public building.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="brands" className="py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-primary">Our Associated Brands</h2>
              <p className="text-muted-foreground text-lg">
                We proudly work with leading brands in the waterproofing industry.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
                <Image
                  src="/placeholder.svg"
                  alt="Brand 1"
                  width={120}
                  height={60}
                  className="w-full h-auto"
                  style={{ aspectRatio: "120/60", objectFit: "cover" }}
                />
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
                <Image
                  src="/placeholder.svg"
                  alt="Brand 2"
                  width={120}
                  height={60}
                  className="w-full h-auto"
                  style={{ aspectRatio: "120/60", objectFit: "cover" }}
                />
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
                <Image
                  src="/placeholder.svg"
                  alt="Brand 3"
                  width={120}
                  height={60}
                  className="w-full h-auto"
                  style={{ aspectRatio: "120/60", objectFit: "cover" }}
                />
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
                <Image
                  src="/placeholder.svg"
                  alt="Brand 4"
                  width={120}
                  height={60}
                  className="w-full h-auto"
                  style={{ aspectRatio: "120/60", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="py-20 px-6 md:px-12 lg:px-20 bg-[#f5f5f5]">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-primary">Get a Quote</h2>
              <p className="text-muted-foreground text-lg">
                Fill out the form below to request a quote for our waterproofing services.
              </p>
            </div>
            <form className="bg-white rounded-lg shadow-md p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Name" placeholder="Enter your name" />
                <Input label="Email" placeholder="Enter your email" />
              </div>
              <Input label="Phone" placeholder="Enter your phone number" />
              <Textarea label="Message" placeholder="Tell us about your project" />
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-8 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <DropletIcon className="w-8 h-8" />
            <span className="text-xl font-bold">Impermeabilizaciones Santiago</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              <InstagramIcon className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              <TwitterIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function BrushIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  )
}


function DropletIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  )
}


function InstagramIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function ShieldIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}


function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

export default Component