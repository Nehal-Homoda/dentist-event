import { heros } from "@/core/AssetsManager";
import type { RegistrationPackage } from "@/types/shared";

export const REGISTRATION_PACKAGES: RegistrationPackage[] = [
    {
        title: "Physical Registration",
        description: "March 17, 2025",
        offers: [
            {
                title: "Egyption Member",
                price: "$150",
                image: heros.package_card_img_1.src,
                programs: [
                    { title: "$3500", subtitle: "Till, 17 Jul", id: "offer_1" },
                    { title: "$4000", subtitle: "Till, 17 Aug", id: "offer_2" },
                    { title: "$5000", subtitle: "Till, 17 Sep", id: "offer_3" },
                    { title: "$6000", subtitle: "Till, 17 Oct", id: "offer_4" },
                ],
            },
            {
                title: "Egyption Non-Member",
                price: "$250",
                image: heros.package_card_img_2.src,
                programs: [
                    { title: "$4500", subtitle: "Till, 17 Jul", id: "offer_1" },
                    { title: "$5000", subtitle: "Till, 17 Aug", id: "offer_2" },
                    { title: "$5500", subtitle: "Till, 17 Sep", id: "offer_3" },
                    { title: "$6500", subtitle: "Till, 17 Oct", id: "offer_4" },
                ],
            },
            {
                title: "Non-Egyption Member",
                price: "$170",
                image: heros.package_card_img_3.src,
                programs: [
                    { title: "$250", subtitle: "Till, 17 Jul", id: "offer_1" },
                    { title: "$300", subtitle: "Till, 17 Aug", id: "offer_2" },
                    { title: "$350", subtitle: "Till, 17 Sep", id: "offer_3" },
                    { title: "$400", subtitle: "Till, 17 Oct", id: "offer_4" },
                ],
            },
            {
                title: "Non-Egyption Non-Member",
                price: "$170",
                image: heros.package_card_img_4.src,
                programs: [
                    { title: "$300", subtitle: "Till, 17 Jul", id: "offer_1" },
                    { title: "$350", subtitle: "Till, 17 Aug", id: "offer_2" },
                    { title: "$400", subtitle: "Till, 17 Sep", id: "offer_3" },
                    { title: "$300", subtitle: "Till, 17 Oct", id: "offer_4" },
                ],
            },
        ],
    },
    {
        title: "Scientific Registration",
        description: "March 17, 2025",
        offers: [
            {
                title: "Egyption Member",
                price: "$150",
                image: heros.package_card_img_1.src,
                programs: [
                    { title: "$2500", subtitle: "Till, 17 Jul", id: "offer_1" },
                    { title: "$3000", subtitle: "Till, 17 Aug", id: "offer_2" },
                    { title: "$3500", subtitle: "Till, 17 Sep", id: "offer_3" },
                    { title: "$4000", subtitle: "Till, 17 Oct", id: "offer_4" },
                ],
            },
            {
                title: "Egyption Non-Member",
                price: "$250",
                image: heros.package_card_img_2.src,
                programs: [
                    { title: "$3000", subtitle: "Till, 17 Jul", id: "offer_1" },
                    { title: "$3600", subtitle: "Till, 17 Aug", id: "offer_2" },
                    { title: "$4200", subtitle: "Till, 17 Sep", id: "offer_3" },
                    { title: "$4800", subtitle: "Till, 17 Oct", id: "offer_4" },
                ],
            },
            {
                title: "Non-Egyption Member",
                price: "$170",
                image: heros.package_card_img_3.src,
                programs: [
                    { title: "$150", subtitle: "Till, 17 Jul", id: "offer_1" },
                    { title: "$200", subtitle: "Till, 17 Aug", id: "offer_2" },
                    { title: "$250", subtitle: "Till, 17 Sep", id: "offer_3" },
                    { title: "$300", subtitle: "Till, 17 Oct", id: "offer_4" },
                ],
            },
            {
                title: "Non-Egyption Non-Member",
                price: "$170",
                image: heros.package_card_img_4.src,
                programs: [
                    { title: "$180", subtitle: "Till, 17 Jul", id: "offer_1" },
                    { title: "$240", subtitle: "Till, 17 Aug", id: "offer_2" },
                    { title: "$300", subtitle: "Till, 17 Sep", id: "offer_3" },
                    { title: "$360", subtitle: "Till, 17 Oct", id: "offer_4" },
                ],
            },
        ],
    },
    {
        title: "Virtual Registration",
        description: "March 17, 2025",
        offers: [
            {
                title: "Egyption Member",
                price: "$150",
                image: heros.package_card_img_1.src,
                programs: [
                    { title: "$1500", subtitle: "Till, 17 Jul", id: "offer_1" },
                    { title: "$2000", subtitle: "Till, 17 Aug", id: "offer_2" },
                    { title: "$2500", subtitle: "Till, 17 Sep", id: "offer_3" },
                    { title: "$3000", subtitle: "Till, 17 Oct", id: "offer_4" },
                ],
            },
            {
                title: "Egyption Non-Member",
                price: "$250",
                image: heros.package_card_img_2.src,
                programs: [
                    { title: "$2000", subtitle: "Till, 17 Jul", id: "offer_1" },
                    { title: "$2500", subtitle: "Till, 17 Aug", id: "offer_2" },
                    { title: "$3000", subtitle: "Till, 17 Sep", id: "offer_3" },
                    { title: "$3500", subtitle: "Till, 17 Oct", id: "offer_4" },
                ],
            },
            {
                title: "Non-Egyption Member",
                price: "$170",
                image: heros.package_card_img_3.src,
                programs: [
                    { title: "$80", subtitle: "Till, 17 Jul", id: "offer_1" },
                    { title: "$130", subtitle: "Till, 17 Aug", id: "offer_2" },
                    { title: "$180", subtitle: "Till, 17 Sep", id: "offer_3" },
                    { title: "$230", subtitle: "Till, 17 Oct", id: "offer_4" },
                ],
            },
            {
                title: "Non-Egyption Non-Member",
                price: "$170",
                image: heros.package_card_img_4.src,
                programs: [
                    { title: "$130", subtitle: "Till, 17 Jul", id: "offer_1" },
                    { title: "$180", subtitle: "Till, 17 Aug", id: "offer_2" },
                    { title: "$230", subtitle: "Till, 17 Sep", id: "offer_3" },
                    { title: "$280", subtitle: "Till, 17 Oct", id: "offer_4" },
                ],
            },
        ],
    },
];
