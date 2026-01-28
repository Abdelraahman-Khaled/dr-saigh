'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic here
        console.log('Form submitted:', formData);
        alert('شكراً لتواصلك معنا! سنرد عليك في أقرب وقت ممكن.');
        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="contact-us-form">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        {/* Contact Us Image Start */}
                        <div className="contact-us-img">
                            <figure className="reveal image-anime">
                                <img src="/images/about-us-img-1.jpg" alt="contact us" />
                            </figure>
                        </div>
                        {/* Contact Us Image End */}
                    </div>

                    <div className="col-lg-6">
                        {/* Contact Form Start */}
                        <div className="contact-form">
                            {/* Section Title Start */}
                            <div className="section-title">
                                <h3 className="wow fadeInUp">أرسل لنا رسالة</h3>
                                <h2 className="wow fadeInUp">نحن هنا للإجابة على استفساراتك</h2>
                            </div>
                            {/* Section Title End */}

                            <form id="contactForm" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="form-group col-md-6 mb-4">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            placeholder="الاسم الكامل"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            dir="rtl"
                                        />
                                    </div>

                                    <div className="form-group col-md-6 mb-4">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="البريد الإلكتروني"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            dir="rtl"
                                        />
                                    </div>

                                    <div className="form-group col-md-6 mb-4">
                                        <input
                                            type="tel"
                                            name="phone"
                                            className="form-control"
                                            id="phone"
                                            placeholder="رقم الهاتف"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            dir="rtl"
                                        />
                                    </div>

                                    <div className="form-group col-md-6 mb-4">
                                        <input
                                            type="text"
                                            name="subject"
                                            className="form-control"
                                            id="subject"
                                            placeholder="الموضوع"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                            dir="rtl"
                                        />
                                    </div>

                                    <div className="form-group col-md-12 mb-4">
                                        <textarea
                                            name="message"
                                            className="form-control"
                                            id="message"
                                            rows="5"
                                            placeholder="رسالتك"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            dir="rtl"
                                        ></textarea>
                                    </div>

                                    <div className="col-md-12">
                                        <button className="btn-default" dir="rtl">
                                            إرسال الرسالة
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* Contact Form End */}
                    </div>
                </div>
            </div>
        </div>
    );
}
