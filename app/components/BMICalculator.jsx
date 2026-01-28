'use client';

import { useState } from 'react';

export default function BMICalculator() {
    const [result, setResult] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const height = parseFloat(e.target.height.value);
        const weight = parseFloat(e.target.weight.value);

        if (height && weight) {
            const heightInMeters = height / 100;
            const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

            let status = '';
            if (bmi < 18.5) {
                status = 'تحت الوزن الطبيعي';
            } else if (bmi >= 18.5 && bmi < 25) {
                status = 'الوزن الطبيعي';
            } else if (bmi >= 25 && bmi < 30) {
                status = 'وزن زائد';
            } else if (bmi >= 30 && bmi < 35) {
                status = 'سمنة من الدرجة الأولى';
            } else if (bmi >= 35 && bmi < 40) {
                status = 'سمنة من الدرجة الثانية';
            } else if (bmi >= 40 && bmi < 50) {
                status = 'سمنة مرضية مفرطة';
            } else {
                status = 'سمنة فوق المفرطة';
            }

            setResult({ bmi, status });
        }
    };

    const closeResult = () => {
        setResult(null);
    };

    return (
        <div className="hc-appointment-wrapper hc-sections" id="calc">
            <div className="container">
                <div className="hc-appointment-row">
                    <div className="hc-appointmnet-text">
                        <div className="hc-about-top">
                            <h6 className="hc-about-subhead">حساب مؤشر كتلة الجسم (BMI)</h6>
                            <h4 className="hc-about-head">حساب مؤشر كتلة الجسم</h4>
                            <p className="hc-paragraph">
                                مؤشر كتلة الجسم هو مقياس يستخدم لتحديد ما إذا كان وزنك مناسبًا لطولك. يساعد في تصنيف
                                وزنك
                                إلى نطاقات مثل الوزن الطبيعي،
                                نقص الوزن، زيادة الوزن، أو السمنة. يتم حسابه بسهولة باستخدام معادلة تعتمد على وزنك
                                بالكيلوجرام وطولك بالمتر.
                            </p>
                            <form className="form" id="bmiForm" onSubmit={handleSubmit}>
                                <input type="number" id="height" name="height" className="form-control" placeholder="اكتب طولك (سم)" required />
                                <input type="number" id="weight" name="weight" className="form-control" placeholder="اكتب وزنك (كغ)" required />
                                <button type="submit" className="form-control">احسب</button>
                            </form>
                        </div>
                    </div>
                    <div className="bmi-table">
                        <div className="bmi-head">
                            <i className="fas fa-tachometer-alt"></i> أقسام مؤشرات الكتلة
                        </div>
                        <ul className="mk-list bmi-list">
                            <li>أقل من 18.5</li>
                            <li>تحت الوزن الطبيعي</li>
                            <li>من 18.5 إلى 24.99</li>
                            <li>الوزن الطبيعي</li>
                            <li>من 25 إلى 29.99</li>
                            <li>وزن زائد</li>
                            <li>من 30 إلى 34.99</li>
                            <li>سمنة من الدرجة الأولى</li>
                            <li>من 35 إلى 39.99</li>
                            <li>سمنة من الدرجة الثانية</li>
                            <li>من 40 إلى 49.99</li>
                            <li>سمنة مرضية مفرطة</li>
                            <li>أكثر من 50</li>
                            <li>سمنة فوق المفرطة</li>
                        </ul>
                    </div>
                    <div className="layout" style={{ display: result ? 'block' : 'none' }}>
                        <div className="result">
                            <i className="fa-solid fa-xmark" onClick={closeResult} style={{ cursor: 'pointer' }}></i>
                            <div>
                                النتيجة: {result?.bmi}
                            </div>
                            <span className="status">
                                {result?.status}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
