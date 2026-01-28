'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // EmailJS configuration - these should be in your .env file
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error('EmailJS configuration is missing. Please check your environment variables.');
            }

            // Send email using EmailJS
            const result = await emailjs.sendForm(
                serviceId,
                templateId,
                formRef.current,
                publicKey
            );

            console.log('Email sent successfully:', result.text);
            setSubmitStatus('success');

            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });

            // Clear success message after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);

        } catch (error) {
            console.error('Failed to send email:', error);
            setSubmitStatus('error');

            // Clear error message after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        } finally {
            setIsSubmitting(false);
        }
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

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <div className="alert alert-success mb-4" role="alert" dir="rtl">
                                    ✅ شكراً لتواصلك معنا! تم إرسال رسالتك بنجاح. سنرد عليك في أقرب وقت ممكن.
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="alert alert-danger mb-4" role="alert" dir="rtl">
                                    ❌ عذراً، حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.
                                </div>
                            )}

                            <form id="contactForm" ref={formRef} onSubmit={handleSubmit}>
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
                                            disabled={isSubmitting}
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
                                            disabled={isSubmitting}
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
                                            disabled={isSubmitting}
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
                                            disabled={isSubmitting}
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
                                            disabled={isSubmitting}
                                            dir="rtl"
                                        ></textarea>
                                    </div>

                                    <div className="col-md-12">
                                        <button
                                            type="submit"
                                            className="btn-default"
                                            disabled={isSubmitting}
                                            dir="rtl"
                                        >
                                            {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
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
