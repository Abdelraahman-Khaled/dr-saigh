'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function BMICalculator() {
    const { t } = useLanguage();
    const [result, setResult] = useState(null);

    const getBMICategory = (bmi) => {
        if (bmi < 18.5) {
            return t('bmiCalculator.categories.underweight');
        } else if (bmi >= 18.5 && bmi < 25) {
            return t('bmiCalculator.categories.normal');
        } else if (bmi >= 25 && bmi < 30) {
            return t('bmiCalculator.categories.overweight');
        } else if (bmi >= 30 && bmi < 35) {
            return t('bmiCalculator.categories.obeseClass1');
        } else if (bmi >= 35 && bmi < 40) {
            return t('bmiCalculator.categories.obeseClass2');
        } else if (bmi >= 40 && bmi < 50) {
            return t('bmiCalculator.categories.morbidObesity');
        } else {
            return t('bmiCalculator.categories.superObesity');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const height = parseFloat(e.target.height.value);
        const weight = parseFloat(e.target.weight.value);

        if (height && weight) {
            const heightInMeters = height / 100;
            const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
            const status = getBMICategory(parseFloat(bmi));

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
                            <h6 className="hc-about-subhead">{t('bmiCalculator.subtitle')}</h6>
                            <h4 className="hc-about-head">{t('bmiCalculator.title')}</h4>
                            <p className="hc-paragraph">
                                {t('bmiCalculator.description')}
                            </p>
                            <form className="form" id="bmiForm" onSubmit={handleSubmit}>
                                <input
                                    type="number"
                                    id="height"
                                    name="height"
                                    className="form-control"
                                    placeholder={t('bmiCalculator.heightPlaceholder')}
                                    required
                                />
                                <input
                                    type="number"
                                    id="weight"
                                    name="weight"
                                    className="form-control"
                                    placeholder={t('bmiCalculator.weightPlaceholder')}
                                    required
                                />
                                <button type="submit" className="form-control">{t('bmiCalculator.calculate')}</button>
                            </form>
                        </div>
                    </div>
                    <div className="bmi-table">
                        <div className="bmi-head">
                            <i className="fas fa-tachometer-alt"></i> {t('bmiCalculator.tableTitle')}
                        </div>
                        <ul className="mk-list bmi-list">
                            {Array.isArray(t('bmiCalculator.ranges')) && t('bmiCalculator.ranges').map((item, index) => (
                                <React.Fragment key={`bmi-${index}`}>
                                    <li>{item.range}</li>
                                    <li>{t(`bmiCalculator.categories.${item.category}`)}</li>
                                </React.Fragment>
                            ))}
                        </ul>
                    </div>
                    <div className="layout" style={{ display: result ? 'block' : 'none' }}>
                        <div className="result">
                            <i className="fa-solid fa-xmark" onClick={closeResult} style={{ cursor: 'pointer' }}></i>
                            <div>
                                {t('bmiCalculator.result')} {result?.bmi}
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
