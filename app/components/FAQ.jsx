export default function FAQ() {
    return (
        <div className="how-it-work" id="FAQs">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        {/* How It Work Image Start */}
                        <div className="how-it-work-img">
                            <figure className="reveal image-anime">
                                <img src="images/faq.png" alt="image" />
                            </figure>
                        </div>
                        {/* How It Work Image End */}
                    </div>

                    <div className="col-lg-6">
                        <div className="how-it-work-content">
                            {/* Section Title Start */}
                            <div className="section-title">
                                <h3 className="wow fadeInUp">FAQs</h3>
                                <h2 className="wow fadeInUp" data-cursor="-opaque">
                                    الأسئلة <span>الأكثر</span> تكراراً
                                </h2>
                                <p className="wow fadeInUp" data-wow-delay="0.25s">
                                    نحن ملتزمون بالاستدامة. تمارس عيادتنا مبادرات
                                    صديقة للبيئة مثل السجلات الرقمية لتقليل النفايات الورقية والمعدات الموفرة
                                    للطاقة.
                                </p>
                            </div>
                            {/* Section Title End */}

                            {/* FAQ Accordion Start */}
                            <div className="faq-accordion how-work-accordion" id="accordion">
                                <div className="accordion-item wow fadeInUp">
                                    <div className="icon-box">
                                        <img src="images/sad-face.png" alt="image" />
                                    </div>
                                    <h2 className="accordion-header" id="heading1">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                            ماذا يحدث لو لم تنجح جراحة السمنة؟
                                        </button>
                                    </h2>
                                    <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#accordion">
                                        <div className="accordion-body">
                                            <p>
                                                إذا لم تنجح العملية، ينبغي مراجعة الطبيب المختص وتقييم وضعك الصحي لمعرفة
                                                الإجراء الذي يجب اتباعه لاحقاً سواء كان ذلك
                                                إجراء عملية تصحيحة أم شيء آخر.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.25s">
                                    <div className="icon-box">
                                        <img src="images/number-2.png" alt="image" />
                                    </div>
                                    <h2 className="accordion-header" id="heading2">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                            هل يمكن عمل عملية التكميم مرتين؟
                                        </button>
                                    </h2>
                                    <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordion">
                                        <div className="accordion-body">
                                            <p>
                                                لا يمكن عمل عملية التكميم مرتين، كون الطبيب يستأصل جزءًا كبيرًا من حجم
                                                المعدة أثناء العملية، ما يجعلها غير قادرة على
                                                تحمل عملية التكميم للمره الثانية
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.50s">
                                    <div className="icon-box">
                                        <img src="images/check.png" alt="image" />
                                    </div>
                                    <h2 className="accordion-header" id="heading3">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                            ما هي نسبة نجاح عملية التكميم؟
                                        </button>
                                    </h2>
                                    <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion">
                                        <div className="accordion-body">
                                            <p>
                                                تبلغ نسبة نجاح عملية تكميم المعدة 80 %- 90% ، مع الأخذ في الاعتبار بعض
                                                التعليمات التي يوصي بها الطبيب المختص.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.75s">
                                    <div className="icon-box">
                                        <img src="images/heartbeat.png" alt="image" />
                                    </div>
                                    <h2 className="accordion-header" id="heading4">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                            ما هو دور المريض لنجاح عمليات السمنة؟
                                        </button>
                                    </h2>
                                    <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordion">
                                        <div className="accordion-body">
                                            <p>
                                                يؤدي إهمال المريض في اتباع نمط حياة صحي، والالتزام بنظام غذائي إلى فشل
                                                الجراحة وتمدد المعدة مرة أخرى، لذلك من المهم
                                                اتباع توصيات المريض للوصول للنتيجة المرغوبة.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInUp" data-wow-delay="1s">
                                    <div className="icon-box">
                                        <img src="images/weight-loss-2.png" alt="image" />
                                    </div>
                                    <h2 className="accordion-header" id="heading5">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                            كم سأفقد من الوزن بعد جراحة السمنة؟
                                        </button>
                                    </h2>
                                    <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordion">
                                        <div className="accordion-body">
                                            <p>
                                                يمكنك فقدان الوزن والوصول إلى النتيجة المرغوبة باتباع تعليمات الطبيب، من
                                                المتوقع أن يخسر مريض السمنة حوالي 8% من وزنه في
                                                أول شهر، ويستمر النزول في الوزن إلى أن يصل المريض للوزن المثالي بعد 6 شهور
                                                إلى سنة.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
