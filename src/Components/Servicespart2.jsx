import React from 'react';
import { NavLink } from 'react-router-dom';
// Palette: Logo Design के लिए, Cog: CMS Development के लिए
import { Cpu, Layout, Users, ShoppingCart, Share2, Smartphone, Check, Palette, Cog } from 'lucide-react'; 
import img1 from "../assets/services/img1.png";
import img2 from "../assets/services/img2.png";
import img3 from "../assets/services/img3.avif";
import img4 from "../assets/services/img4.png";
import img5 from "../assets/services/img5.png";
import img6 from "../assets/services/img6.png";
import img7 from "../assets/services/img7.png";

const servicesData = [
    // ... (पिछले 6 सर्विस कार्ड का डेटा यहाँ आएगा) ...
    { icon: Layout, title: 'WEB DEVELOPMENT', description: 'We offer end-to-end web solutions...', link: '#webdevelopment-detail' }, // लिंक अपडेटेड
    { icon: Cpu, title: 'WEB DESIGN', description: 'Quality content attracts the users...', link: '#webdesign-detail' },
    // **REMOVE: DIGITAL MARKETING (Removed)**
    // **ADD: LOGO DESIGN**
    { icon: Palette, title: 'LOGO DESIGN', description: 'Crafting a unique and memorable identity for your brand.', link: '#logodesign-detail' },
    { icon: ShoppingCart, title: 'ECOMMERCE DEVELOPMENT', description: 'Boost your business profits...', link: '#ecommerce-detail' },
    // **REMOVE: SOCIAL MEDIA MARKETING (Removed)**
    // **ADD: CMS DEVELOPMENT**
    { icon: Cog, title: 'CMS DEVELOPMENT', description: 'Custom Content Management Systems for easy site management.', link: '#cmsdevelopment-detail' },
    { icon: Smartphone, title: 'MOBILE APPLICATION DEVELOPMENT', description: 'Get access to mobile application...', link: '#mobileapp-detail' },
];


// --- 2. ServiceCard Component (आपके 6 प्रमुख कार्ड के लिए) ---
const ServiceCard = ({ icon: Icon, title, description, link }) => (
    <NavLink
        to={link} // यहाँ NavLink की जगह 'to={link}' के साथ एक एंकर लिंक दिया गया है
        className="border border-red-300 rounded-xl p-6 bg-white shadow-lg transition-all duration-300 hover:shadow-xl group flex flex-col items-center text-center"
    >
        <div className="relative w-16 h-16 mb-4">
            <div className="absolute inset-0 bg-gray-200 rounded-full flex items-center justify-center opacity-70"></div>
            <Icon className="w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-600" />
        </div>
        <h3 className="text-lg font-bold text-gray-800 uppercase mt-2">{title}</h3>
        <p className="mt-3 text-sm text-gray-600 line-clamp-4 flex-grow">{description}</p>
        <span className="mt-4 px-4 py-2 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md uppercase">
            View Details
        </span>
    </NavLink>
);




// --- 3. ECommerceServicesDetail Component Logic (पिछले सेक्शन से) ---
// यह अब ServicesPage.jsx के अंदर ही डिफाइन किया गया है।
const CheckListItem = ({ children }) => (
    <li className="flex items-start space-x-3">
        <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
        <span className="text-gray-700">{children}</span>
    </li>
);

const ECommerceServicesDetail = () => (
    <section id="ecommerce-detail" className=" px-15 py-16 sm:py-20 lg:py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            <h2 className="text-4xl font-extrabold text-center text-blue-600 mb-12">E-Commerce Solutions</h2>

            {/* 1. E-Commerce Website Development (Text Left, Image Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 rounded-xl shadow-lg">
                {/* ... (यहां E-commerce Development का सारा कंटेंट आएगा) ... */}
                <div className="order-2 lg:order-1">
                    <h3 className="text-2xl font-bold text-gray-900">1. E-Commerce Website Development</h3>
                    <p className="mt-4 text-gray-700">We build seamless solutions that take you from idea to a thriving online store, helping you establish a strong digital presence...</p>
                    <ul className="mt-6 space-y-3 list-none"><CheckListItem>Full-Cycle Development</CheckListItem><CheckListItem>New Business Revenue</CheckListItem><CheckListItem>Secured Solutions</CheckListItem><CheckListItem>Conversion Optimization</CheckListItem></ul>
                    <div className="mt-8"><NavLink to="/contact" className="inline-flex items-center px-8 py-3 text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 uppercase">LET'S LAUNCH</NavLink></div>
                </div>
                <div className="order-1 lg:order-2 flex justify-center">
                    <img src={img1} alt="" />
                </div>
            </div>

            {/* 2. Shopify Website Development (Image Left, Text Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 rounded-xl shadow-lg">
                <div className="order-1 flex justify-center">
                    <img src={img2} alt="" />
                </div>
                <div className="order-2">
                    <h3 className="text-2xl font-bold text-gray-900">2. Shopify Website Development</h3>
                    <p className="mt-4 text-gray-700">We specialize in the delivery of custom Shopify solutions. We focus on creating a visually appealing and highly functional online store...</p>
                    <ul className="mt-6 space-y-3 list-none"><CheckListItem>Tailored Themes & User Experience</CheckListItem><CheckListItem>Seamless Payment Integration</CheckListItem><CheckListItem>Optimized for Conversions</CheckListItem><CheckListItem>24/7 Expert Support</CheckListItem></ul>
                    <div className="mt-8"><NavLink to="/contact" className="inline-flex items-center px-8 py-3 text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 uppercase">START YOUR SHOPIFY JOURNEY</NavLink></div>
                </div>
            </div>

            {/* 3. WooCommerce Website Development (Text Left, Image Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 rounded-xl shadow-lg">
                <div className="order-2 lg:order-1">
                    <h3 className="text-2xl font-bold text-gray-900">3. WooCommerce Website Development</h3>
                    <p className="mt-4 text-gray-700">For businesses looking for a customizable, open-source solution, WooCommerce is the perfect choice...</p>
                    <ul className="mt-6 space-y-3 list-none"><CheckListItem>Custom Design & Functionality</CheckListItem><CheckListItem>Improved Solutions</CheckListItem><CheckListItem>Built for SEO Optimization</CheckListItem><CheckListItem>Robust & Scalable</CheckListItem></ul>
                </div>
                <div className="order-1 lg:order-2 flex justify-center">
                    <img src={img3} alt="" />
                </div>
            </div>
        </div>
        {/* 4. Logo Design Services (Text Left, Image Right) - Keep this section if it's the detailed one */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gray-50 p-8 rounded-xl shadow-lg">
            <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-gray-900">4. Custom Logo Design</h3>
                <p className="mt-4 text-gray-700">
                    A unique and memorable logo is the foundation of your brand identity. Our designers craft
                    logos that are timeless, scalable, and perfectly embody your company's vision and values.
                </p>
                <ul className="mt-6 space-y-3 list-none">
                    <CheckListItem>Brand Identity Consultation</CheckListItem>
                    <CheckListItem>Vector & High-Resolution Files</CheckListItem>
                    <CheckListItem>Multiple Design Concepts</CheckListItem>
                </ul>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
                <img src={img7} alt="" />
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 rounded-xl shadow-lg">
            <div className="order-1 flex justify-center">
                <img src={img5} alt="" />

            </div>
            <div className="order-2">
                <h3 className="text-2xl font-bold text-gray-900">5. UI/UX Strategy & Design</h3>
                <p className="mt-4 text-gray-700">
                    We prioritize user experience (UX) to ensure your visitors enjoy using your site. Our UI design
                    focuses on visual appeal, responsiveness, and conversion-focused layouts.
                </p>
                <ul className="mt-6 space-y-3 list-none">
                    <CheckListItem>User Research & Persona Mapping</CheckListItem>
                    <CheckListItem>Wireframing & Prototyping</CheckListItem>
                    <CheckListItem>Responsive Interface Design</CheckListItem>
                </ul>
            </div>
        </div>
    </section>
);





const WebDesignServicesDetail = () => (
    <section id="webdesign-detail" className="py-16 sm:py-20 lg:py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-extrabold text-blue-600">Web Design & UX/UI Detailing</h2>
            <p className="mt-4 text-gray-600">-- Detailed sections for UI/UX, Mockups, and Responsive Design will go here --</p>
        </div>
    </section>
);

// **REMOVED: DigitalMarketingServicesDetail (Removed)**
// **REMOVED: SocialMediaServicesDetail (Removed)**

const MobileAppServicesDetail = () => (
    <section id="mobileapp-detail" className="py-16 sm:py-20 lg:py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-extrabold text-blue-600">Mobile App Development</h2>
            <p className="mt-4 text-gray-600">-- Detailed sections for iOS, Android, and Hybrid App Development will go here --</p>
        </div>
    </section>
);


// --- 5. Main Services Page Component ---
const ServicesPart2 = () => {
    return (
        <main>

           
            {/* 3. Detailed Service Sections (क्रम से एक के बाद एक) */}
            <ECommerceServicesDetail />
            {/* <CMSDevelopmentServicesDetail /> */}
            {/* <WebDesignServicesDetail /> */}
            {/* <MobileAppServicesDetail /> */}


        </main>
    );
};

export default ServicesPart2;