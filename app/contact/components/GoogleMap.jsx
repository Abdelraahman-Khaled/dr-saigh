export default function GoogleMap() {
    return (
        <div className="contact-google-map" style={{ paddingBottom: '50px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {/* Google Map Iframe Start */}
                        <div className="google-map-iframe">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.1234567890123!2d46.7696421!3d24.7715582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f01d8bcd91a1b%3A0xf0ef35c448aea802!2z2LnZitin2K_YqSDYp9mE2K_Zg9iq2YjYsSDYudio2K_Yp9mE2LHYrdmF2YYg2KfZhNi12KfYptilINmE2KzYsdin2K3YqSDYp9mE2LPZhdmG2Kkg2YjYp9mE2YXZhtin2LjZitixINmI2KfZhNis2LHYp9it2Kkg2KfZhNi52KfZhdip!5e0!3m2!1sen!2ssa!4v1234567890123!5m2!1sen!2ssa"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        {/* Google Map Iframe End */}
                    </div>
                </div>
            </div>
        </div>
    );
}
