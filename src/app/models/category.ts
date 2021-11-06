export class Category {
    id: string;
    title: string;
    type: string;
    category: string;
    description: string;
    aquisition: string;
    puts: string;
    includes: string;
    symbol: string;
    image: string;
}

export const CATEGORIES_de: Category[] = [
    {
        id: 'am',
        title: 'Kategorie AM',
        type: 'Kleinkrafträder',
        category: 'AM',
        description: `zwei- oder dreirädrige Kraftfahrzeuge sowie vierrädrige Leichtkraftfahrzeuge mit einer bauartbedingten Höchstgeschwindigkeit von bis zu 45 km/h`,
        aquisition: `ab 16 Jahren bzw. in Österreich ab 15 Jahren`,
        puts: `-`,
        includes: `-`,
        symbol: 'assets/img/symbols/am.jpg',
        image: 'assets/img/categories/am.jpg'
    } as Category,
    {
        id: 'a1',
        title: 'Kategorie A1',
        type: 'Krafträder* / Motorrad',
        category: 'A1',
        description: `Krafträder mit einem Hubraum von bis zu 125 cm³ mit einer Motorleistung von bis zu 11 kW (Leichtkrafträder) und einem Leistungsgewicht bis zu 0,1 kW/kg sowie dreirädrige Kraftfahrzeuge mit einer Leistung von bis zu 15 kW`,
        aquisition: `ab 16 Jahren`,
        puts: `-`,
        includes: `AM`,
        symbol: 'assets/img/symbols/a1.jpg',
        image: 'assets/img/categories/a1.jpg'
    } as Category,
    {
        id: 'A2',
        title: 'Kategorie A2',
        type: 'Krafträder* / Motorrad',
        category: 'A2',
        description: `Krafträder mit einer Motorleistung von bis zu 35 kW und einem Leistungsgewicht bis zu 0,2 kW/kg, die nicht von einem Fahrzeug mit mehr als der doppelten Motorleistung abgeleitet sind`,
        aquisition: `ab 18 Jahren`,
        puts: `-`,
        includes: `A1, AM`,
        symbol: 'assets/img/symbols/a2.jpg',
        image: 'assets/img/categories/a2.jpg'
    } as Category,
    {
        id: 'a',
        title: 'Kategorie A',
        type: 'Krafträder* / Motorrad',
        category: 'A',
        description: `Krafträder über 50 cm³ oder über 45 km/h, auch mit Beiwagen, sowie dreirädrige Kraftfahrzeuge<sup id="cite_ref-4" class="reference">[4]</sup> mit einer Leistung von mehr als 15 kW`,
        aquisition: `Ab 20 Jahren bei mindestens zweijähriger Fahrpraxis <small>(Nachweis der Fahrpraxis nicht erforderlich, Schweiz: klaglose Fahrpraxis vorausgesetzt)</small> der Klasse A2 bzw. AB.`,
        puts: `-`,
        includes: `A1, A2, AM`,
        symbol: 'assets/img/symbols/a.jpg',
        image: 'assets/img/categories/a.jpg'
    } as Category,
    {
        id: 'b1',
        title: 'Kategorie B1',
        type: 'Mehrspurige Kraftfahrzeuge',
        category: 'B1',
        description: `Mehrspurige Kraftfahrzeuge bis 550 kg Leermasse`,
        aquisition: `je nach Land ab 16 oder 18 Jahren`,
        puts: `-`,
        includes: `AM`,
        symbol: 'assets/img/symbols/b1.jpg',
        image: 'assets/img/categories/b1.jpg'
    } as Category,
    {
        id: 'b',
        title: 'Kategorie B',
        type: 'Mehrspurige Kraftfahrzeuge',
        category: 'B',
        description: `Mehrspurige Kraftfahrzeuge bis 3,5 t zulässiger Gesamtmasse und maximal 9 Sitzplätzen (einschließlich Fahrer).`,
        aquisition: `Je nach Land ab 17 (Begleitetes Fahren) oder ab 18 Jahren`,
        puts: `-`,
        includes: `AM, B1<br>Sofern Artikel 6, Ziffer 3b in nationales Recht umgesetzt wurde ist die Klasse <strong>A1</strong> eingeschlossen (z. B. Code 111 in Österreich)`,
        symbol: 'assets/img/symbols/b.jpg',
        image: 'assets/img/categories/b.jpg'
    } as Category,
    {
        id: 'c1',
        title: 'Kategorie C1',
        type: 'Mehrspurige Kraftfahrzeuge',
        category: 'C1',
        description: `Mehrspuriges Kraftfahrzeug bis 7,5 t zulässiger Gesamtmasse, maximal 9 Sitzplätze (einschließlich Fahrer)`,
        aquisition: `ab 18 Jahren<`,
        puts: `B`,
        includes: `-`,
        symbol: 'assets/img/symbols/c1.jpg',
        image: 'assets/img/categories/c1.jpg'
    } as Category,
    {
        id: 'c',
        title: 'Kategorie C',
        type: 'Mehrspurige Kraftfahrzeuge',
        category: 'C',
        description: `Mehrspurige Kraftfahrzeuge über 7,5 t zulässiger Gesamtmasse, maximal 9 Sitzplätze (einschließlich Fahrer)`,
        aquisition: `Je nach Land oder Sonderbestimmungen 18 oder 21 Jahre`,
        puts: `B`,
        includes: `C1`,
        symbol: 'assets/img/symbols/c.jpg',
        image: 'assets/img/categories/c.jpg'
    } as Category,
    {
        id: 'D1',
        title: 'Kategorie D1',
        type: 'Omnibusse',
        category: 'D1',
        description: `Omnibusse mit bis 16 Sitzplätzen einschließlich Fahrer (Schweiz: 9 bis 16 ohne Fahrer) und höchstens 8 m Länge`,
        aquisition: `ab 21 Jahren`,
        puts: `B`,
        includes: `-`,
        symbol: 'assets/img/symbols/d1.jpg',
        image: 'assets/img/categories/d1.jpg'
    } as Category,
    {
        id: 'D',
        title: 'Kategorie D',
        type: 'Omnibusse',
        category: 'D',
        description: `Omnibusse mit mehr als 9 Sitzplätzen (einschließlich Fahrer)`,
        aquisition: `Je nach Land ab 21 oder 24 Jahren`,
        puts: `B`,
        includes: `D1, D1E und DE, sofern CE vorhanden`,
        symbol: 'assets/img/symbols/d.jpg',
        image: 'assets/img/categories/d.jpg'
    } as Category,
    {
        id: 'be',
        title: 'Kategorie BE',
        type: 'Mehrspurige Kraftfahrzeuge mit Anhänger',
        category: 'BE',
        description: `Züge aus B-Zugfahrzeug und Anhänger über 0,75 t zulässiger Gesamtmasse (sofern der Zug nicht unter Klasse B fällt)`,
        aquisition: `Je nach Land ab 17 (Begleitetes Fahren) oder 18 Jahren`,
        puts: `B`,
        includes: `-`,
        symbol: 'assets/img/symbols/be.jpg',
        image: 'assets/img/categories/be.jpg'
    } as Category,
    {
        id: 'c1e',
        title: 'Kategorie C1E',
        type: 'Mehrspurige Kraftfahrzeuge mit Anhänger',
        category: 'C1E',
        description: `Züge aus C1-Zugfahrzeug und Anhänger über 0,75 t zulässiger Gesamtmasse, sowie Züge aus B-Zugfahrzeug und Anhänger über 3,5 t zulässiger Gesamtmasse`,
        aquisition: `ab 18 Jahren`,
        puts: `C1`,
        includes: `BE`,
        symbol: 'assets/img/symbols/c1e.jpg',
        image: 'assets/img/categories/c1e.jpg'
    } as Category,
    {
        id: 'ce',
        title: 'Kategorie CE',
        type: 'Mehrspurige Kraftfahrzeuge mit Anhänger',
        category: 'CE',
        description: `Lastzüge und Sattelkraftfahrzeuge`,
        aquisition: `ab 18 Jahren`,
        puts: `C`,
        includes: `BE, C1E, D1E oder DE, sofern D1 bzw. D vorhanden`,
        symbol: 'assets/img/symbols/ce.jpg',
        image: 'assets/img/categories/ce.jpg'
    } as Category,
    {
        id: 'd1e',
        title: 'Kategorie D1E',
        type: 'Mehrspurige Kraftfahrzeuge mit Anhänger',
        category: 'D1E',
        description: `Züge aus D1-Zugfahrzeug und Anhänger mit mehr als 0,75 t zulässiger Gesamtmasse`,
        aquisition: `ab 21 Jahren`,
        puts: `D1`,
        includes: `BE`,
        symbol: 'assets/img/symbols/d1e.jpg',
        image: 'assets/img/categories/d1e.jpg'
    } as Category,
    {
        id: 'de',
        title: 'Kategorie DE',
        type: 'Mehrspurige Kraftfahrzeuge mit Anhänger',
        category: 'DE',
        description: `Züge aus D-Zugfahrzeug und Anhänger mit mehr als 0,75 t zulässiger Gesamtmasse`,
        aquisition: `Je nach Land ab 21 oder 24 Jahren`,
        puts: `D`,
        includes: `BE, D1E`,
        symbol: 'assets/img/symbols/de.jpg',
        image: 'assets/img/categories/de.jpg'
    } as Category
]

export const CATEGORIES_en: Category[] = [
    {
        id: 'am',
        title: ' Category AM',
        type: 'Mopeds',
        category: 'AM',
        description: `Two or three-wheel motor vehicles as well as four-wheel light vehicles with a design-related maximum speed of up to 45 km / h`,
        aquisition: `From 16 years or from 15 years in Austria `,
        puts: `-`,
        includes: `-`,
        symbol: 'assets/img/symbols/am.jpg',
        image: 'assets/img/categories/am.jpg'
    } as Category,
    {
        id: 'a1',
        title: ' Category A1',
        type: 'Motorcycles',
        category: 'A1',
        description: `Motorcycles with a cubic capacity of up to 125 cm³ with an engine power of up to 11 kW (light motorcycles) and a power to weight ratio of up to 0.1 kW / kg as well as three-wheel motor vehicles with a power of up to 15 kW`,
        aquisition: `From 16 years`,
        puts: `-`,
        includes: `AM`,
        symbol: 'assets/img/symbols/a1.jpg',
        image: 'assets/img/categories/a1.jpg'
    } as Category,
    {
        id: 'A2',
        title: ' Category A2',
        type: 'Motorcycles',
        category: 'A2',
        description: `Motorcycles with an engine power of up to 35 kW and a power to weight ratio of up to 0.2 kW / kg, which are not derived from a vehicle with more than twice the engine power`,
        aquisition: `from 18 years`,
        puts: `-`,
        includes: `A1, AM`,
        symbol: 'assets/img/symbols/a2.jpg',
        image: 'assets/img/categories/a2.jpg'
    } as Category,
    {
        id: 'a',
        title: ' Category A',
        type: 'Motorcycles',
        category: 'A',
        description: `Motorcycles over 50 cm³ or over 45 km / h, also with sidecar, as well as three-wheel motor vehicles <sup id = "cite_ref-4" class = "reference"> [4] </sup> with an output of more than 15 kW`,
        aquisition: `From the age of 20 with at least two years of driving experience <small> (proof of driving experience not required, Switzerland: complaint-free driving experience required) </small> of class A2 or AB.`,
        puts: `-`,
        includes: `A1, A2, AM`,
        symbol: 'assets/img/symbols/a.jpg',
        image: 'assets/img/categories/a.jpg'
    } as Category,
    {
        id: 'b1',
        title: ' Category B1',
        type: 'Multi-lane motor vehicles',
        category: 'B1',
        description: `Multitrack motor vehicles up to 550 kg empty weight`,
        aquisition: `depending on the country from 16 or 18 years`,
        puts: `-`,
        includes: `AM`,
        symbol: 'assets/img/symbols/b1.jpg',
        image: 'assets/img/categories/b1.jpg'
    } as Category,
    {
        id: 'b',
        title: ' Category B',
        type: 'Multi-lane motor vehicles',
        category: 'B',
        description: `Multi-lane motor vehicles up to 3.5 t gross vehicle weight and a maximum of 9 seats (including driver).`,
        aquisition: `Depending on the country from 17 (accompanied driving) or from 18 years`,
        puts: `-`,
        includes: `AM, B1 <br> Provided that article 6, number 3b has been implemented in national law <sup id = "cite_ref-rili20_2-1" class = "reference"> <a href = "http://fahrschule-ohne-mpu.eu / classes / # cite_note-rili20-2 "> [2] </a> </sup> the class <strong> A1 </strong> is included (e.g. code 111 in Austria)`,
        symbol: 'assets/img/symbols/b.jpg',
        image: 'assets/img/categories/b.jpg'
    } as Category,
    {
        id: 'c1',
        title: ' Category C1',
        type: 'Multi-lane motor vehicles',
        category: 'C1',
        description: `Multi-lane motor vehicle up to 7.5 t permissible total weight, maximum 9 seats (including driver)`,
        aquisition: `from 18 years`,
        puts: `B`,
        includes: `-`,
        symbol: 'assets/img/symbols/c1.jpg',
        image: 'assets/img/categories/c1.jpg'
    } as Category,
    {
        id: 'c',
        title: ' Category C',
        type: 'Multi-lane motor vehicles',
        category: 'C',
        description: `Multi-lane motor vehicles over 7.5 t gross vehicle weight, maximum 9 seats (including driver)`,
        aquisition: `Depending on the country or special regulations 18 or 21 years`,
        puts: `B`,
        includes: `C1`,
        symbol: 'assets/img/symbols/c.jpg',
        image: 'assets/img/categories/c.jpg'
    } as Category,
    {
        id: 'D1',
        title: ' Category D1',
        type: 'Buses',
        category: 'D1',
        description: `Buses with up to 16 seats including driver (Switzerland: 9 to 16 without driver) and a maximum length of 8 m`,
        aquisition: `From 21 years`,
        puts: `B`,
        includes: `-`,
        symbol: 'assets/img/symbols/d1.jpg',
        image: 'assets/img/categories/d1.jpg'
    } as Category,
    {
        id: 'D',
        title: ' Category D',
        type: 'Buses',
        category: 'D',
        description: `Buses with more than 9 seats (including the driver)`,
        aquisition: `Depending on the country from 21 or 24 years`,
        puts: `B`,
        includes: `D1, D1E and DE if CE available`,
        symbol: 'assets/img/symbols/d.jpg',
        image: 'assets/img/categories/d.jpg'
    } as Category,
    {
        id: 'be',
        title: ' Category BE',
        type: 'Multi-lane motor vehicles with trailers',
        category: 'BE',
        description: `Trains from B towing vehicle and trailers over 0.75 t gross vehicle weight (provided the train does not fall under class B)`,
        aquisition: `Depending on the country from 17 (accompanied driving) or 18 years`,
        puts: `B`,
        includes: `-`,
        symbol: 'assets/img/symbols/be.jpg',
        image: 'assets/img/categories/be.jpg'
    } as Category,
    {
        id: 'c1e',
        title: ' Category C1E',
        type: 'Multi-lane motor vehicles with trailers',
        category: 'C1E',
        description: `Trains from C1 towing vehicle and trailer over 0.75 t permissible total mass, as well as trains from B towing vehicle and trailer over 3.5 t permissible total mass`,
        aquisition: `from 18 years`,
        puts: `C1`,
        includes: `BE`,
        symbol: 'assets/img/symbols/c1e.jpg',
        image: 'assets/img/categories/c1e.jpg'
    } as Category,
    {
        id: 'ce',
        title: ' Category CE',
        type: 'Multi-lane motor vehicles with trailers',
        category: 'CE',
        description: `Road trains and articulated vehicles`,
        aquisition: `from 18 years`,
        puts: `C`,
        includes: `BE, C1E, D1E or DE, if D1 or D is present`,
        symbol: 'assets/img/symbols/ce.jpg',
        image: 'assets/img/categories/ce.jpg'
    } as Category,
    {
        id: 'd1e',
        title: ' Category D1E',
        type: 'Multi-lane motor vehicles with trailers',
        category: 'D1E',
        description: `Trains from D1 towing vehicle and trailers with a gross vehicle weight of more than 0.75 t`,
        aquisition: `From 21 years`,
        puts: `D1`,
        includes: `BE`,
        symbol: 'assets/img/symbols/d1e.jpg',
        image: 'assets/img/categories/d1e.jpg'
    } as Category,
    {
        id: 'de',
        title: ' Category DE',
        type: 'Multi-lane motor vehicles with trailers',
        category: 'DE',
        description: `Trains from D towing vehicle and trailers with a gross vehicle weight of more than 0.75 t`,
        aquisition: `Depending on the country from 21 or 24 years`,
        puts: `D`,
        includes: `BE, D1E`,
        symbol: 'assets/img/symbols/de.jpg',
        image: 'assets/img/categories/de.jpg'
    } as Category
]