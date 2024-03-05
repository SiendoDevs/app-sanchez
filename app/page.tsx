"use client"

import React, { useState } from 'react';

import HeaderSection from "./components/HeaderSection";
import HeroSection from "./components/HeroSection";
import ContentSection from "./components/ContentSection";
import Contact from "./components/ContactSection";
import Navbar from "./components/Navbar";
import CartDrawer from "./components/CartDrawer";

const navigation = [
    { name: 'Productos', href: 'products' },
    { name: 'Empresa', href: '#' },
    { name: 'Exportación', href: '#' },
    { name: 'Contacto', href: '#' },
];

export default function Home() {

    return (
        <div>
            <Navbar navigation={navigation} />
            <CartDrawer />
            <HeroSection />
            <HeaderSection />
            <ContentSection />
            <Contact />
        </div>
    );
}
