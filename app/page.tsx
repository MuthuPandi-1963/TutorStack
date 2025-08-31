import ContactSection from '@/components/custom/contact';
import CoursesSection from '@/components/custom/courses';
import FeaturesSection from '@/components/custom/features';
import Header from '@/components/custom/header';
import Hero from '@/components/custom/hero';
import PricingSection from '@/components/custom/pricing_section';
import React from 'react'

export default function HomePage() {
  return (
    <div className=" m-0">
    <Header/>
    <Hero/>
    <FeaturesSection/>
    <CoursesSection/>
    <PricingSection/>
    <ContactSection/>
    </div>
  )
}
