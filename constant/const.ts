import { Doctor, HospitalSection, Location, ServiceType } from "@/types/types";

export const sections = [
    {
        id: 1,
        name: "قسم الطوارئ",
        price: "مجاناً",
        status: "مفتوح",
        image: "../assets/images/card.jpg",
        location: "الطابق الأرضي - الجناح الشرقي",
        paymentType: "حسب الحالة",
    },
    {
        id: 2,
        name: "قسم الأطفال",
        price: "رسوم رمزية",
        status: "مغلق حالياً",
        image: "../assets/images/card.jpg",
        location: "الطابق الأول - الجناح الشمالي",
        paymentType: "شهري",
    },
    {
        id: 3,
        name: "قسم الأشعة",
        price: "حسب نوع الصورة",
        status: "مفتوح",
        image: "@/assets/images/card.jpg",
        location: "الطابق الأرضي - قرب الاستقبال",
        paymentType: "مرة واحدة",
    },
    {
        id: 4,
        name: "قسم الجراحة",
        price: "حسب التدخل",
        status: "مغلق حالياً",
        image: "@/assets/images/card.jpg",
        location: "الطابق الثاني",
        paymentType: "حسب الحالة",
    },
    {
        id: 5,
        name: "قسم القلب",
        price: "استشارة بـ 75,000 ل.س",
        status: "رهنية",
        image: "@/assets/images/card.jpg",
        location: "الطابق الثالث",
        paymentType: "شهري",
    },
    {
        id: 6,
        name: "مختبر التحاليل",
        price: "حسب التحليل",
        status: "مغلق حالياً",
        image: "@/assets/images/card.jpg",
        location: "الطابق الأرضي",
        paymentType: "مرة واحدة",
    },
    {
        id: 7,
        name: "قسم العناية المشددة",
        price: "150,000 ل.س لليلة",
        status: "مفتوح",
        image: "@/assets/images/card.jpg",
        location: "الطابق الرابع",
        paymentType: "يومي",
    },
    {
        id: 8,
        name: "عيادة الأسنان",
        price: "50,000 ل.س للجلسة",
        status: "رهنية",
        image: "@/assets/images/card.jpg",
        location: "الطابق الأول - الجناح الجنوبي",
        paymentType: "حسب الجلسة",
    },
];

export const hospitals = [
    {
        id: 1,
        name: "مستشفى الشام التخصصي",
        price: "استشارات تبدأ من 50,000 ل.س",
        status: "مفتوح",
        image: "https://images.unsplash.com/photo-1576765607924-bb6a2e4496b1", // generic hospital
        location: "دمشق - أبو رمانة",
        paymentType: "تأمين صحي / نقدي",
    },
    {
        id: 2,
        name: "مستشفى دار الشفاء",
        price: "متوسط 100,000 ل.س للعملية",
        status: "مغلق حالياً",
        image: "https://images.unsplash.com/photo-1589758438368-8e26625175fd",
        location: "حلب - الفرقان",
        paymentType: "نقدي فقط",
    },
    {
        id: 3,
        name: "مستشفى تشرين العسكري",
        price: "مجاناً للعسكريين",
        status: "مفتوح",
        image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8a0",
        location: "دمشق - حرستا",
        paymentType: "حكومي",
    },
    {
        id: 4,
        name: "مستشفى الرازي",
        price: "أسعار رمزية",
        status: "مفتوح",
        image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
        location: "حلب - العزيزية",
        paymentType: "تأمين / نقدي",
    },
    {
        id: 5,
        name: "مستشفى الأسد الجامعي",
        price: "بحسب نوع الخدمة",
        status: "رهنية",
        image: "https://images.unsplash.com/photo-1600959907703-e9cc7c62d5e3",
        location: "دمشق - المزة",
        paymentType: "حكومي / تأمين",
    },
    {
        id: 6,
        name: "مستشفى تشرين الجامعي",
        price: "مجاني للطلاب والكوادر",
        status: "مفتوح",
        image: "https://images.unsplash.com/photo-1580281658334-1b8241ab0945",
        location: "اللاذقية - الكورنيش الجنوبي",
        paymentType: "حكومي",
    },
    {
        id: 7,
        name: "مستشفى الطب الحديث",
        price: "200,000 ل.س للإقامة اليومية",
        status: "مفتوح",
        image: "https://images.unsplash.com/photo-1587351021747-441ce41d0a33",
        location: "طرطوس - المشروع السادس",
        paymentType: "شهري / تأمين",
    },
    {
        id: 8,
        name: "مستشفى النور",
        price: "حسب العلاج",
        status: "مغلق حالياً",
        image: "https://images.unsplash.com/photo-1576765974324-0d402a21a0d3",
        location: "حمص - الوعر",
        paymentType: "نقدي / كل 6 أشهر",
    },
];

export const images = [
    { id: 1, source: require("../assets/images/house-1.jpg") },
    { id: 2, source: require("../assets/images/house-2.jpg") },
    { id: 3, source: require("../assets/images/house-3.jpg") },
    { id: 4, source: require("../assets/images/house-4.jpg") },
    { id: 5, source: require("../assets/images/house-5.jpg") },
    { id: 6, source: require("../assets/images/house-6.jpg") },
    { id: 7, source: require("../assets/images/house-7.jpg") },
];

export const hospitalSections: HospitalSection[] = [
    { id: 1, name: "عيادة القلب" },
    { id: 2, name: "عيادة العيون" },
    { id: 3, name: "عيادة الأسنان" },
    { id: 4, name: "عيادة الأطفال" },
    { id: 5, name: "عيادة النساء" },
    { id: 6, name: "عيادة الباطنة" },
    { id: 7, name: "قسم الأشعة" },
    { id: 8, name: "قسم المختبر" },
];

export const serviceTypes: ServiceType[] = [
    { id: 1, name: "فحص" },
    { id: 2, name: "جراحة" },
    { id: 3, name: "اسعاف" },
];
export const locations: Location[] = [
    { id: 1, name: "دمشق" },
    { id: 2, name: "حلب" },
    { id: 3, name: "حمص" },
    { id: 4, name: "حماة" },
    { id: 5, name: "اللاذقية" },
    { id: 6, name: "طرطوس" },
    { id: 7, name: "دير الزور" },
    { id: 8, name: "الحسكة" },
    { id: 9, name: "الرقة" },
    { id: 10, name: "السويداء" },
    { id: 11, name: "درعا" },
    { id: 12, name: "إدلب" },
    { id: 13, name: "ريف دمشق" },
];
export const doctors: Doctor[] = [
    {
        id: 1,
        name: "د. أحمد محمد",
        specialization: "طب عام",
        availableSlots: ["09:00", "10:00", "11:00", "14:00", "15:00"],
    },
    {
        id: 2,
        name: "د. سارة أحمد",
        specialization: "طب عام",
        availableSlots: ["09:30", "10:30", "11:30", "14:30", "15:30"],
    },
];
