import { Deserializable } from "./deserializable";

export class Pet implements Deserializable {
    databaseID?: string;
    id: string;
    name: string;
    gender: string;
    age: string;
    WandH: string;
    ageNumber: number;
    image: string;
    price: number;
    reserve_fee: number;
    status: string;
    registered: string;
    description: string;
    size: string;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}

export const PETS: Pet[] = [
    // {
    //     id: 'lolly', size: 'Mini', name: 'LOLLY ', image: 'assets/img/Lucy.jpg',
    //     gender: 'Female', age: "8 Weeks", ageNumber: 8, price: 700, reserve_fee: 250,
    //     registered: "AKC Registered", status: 'Available', WandH: '20 lbs & 10 Inches',
    //     description: "Charming Pitbull Lolly now ready to meet their new loving Friendly. She is current on all shots, potty trained, and has an excellent pedigree. Will come with toys. We are looking for the perfect homes for her where she will be shown all love and care. Parents are both health tested. We expect nothing less from these little ones.",
    // } as Pet,

    // {
    //     id: 'niki', size: 'Mini', name: 'NIKI ', image: 'assets/img/Lucy.jpg',
    //     gender: 'Male', age: "8 Weeks", ageNumber: 8, price: 700, reserve_fee: 250,
    //     registered: "AKC Registered", status: 'Available', WandH: '20 lbs & 10 Inches',
    //     description: "Niki is a precious little Pitbull puppy who is just as cute as can be! This social pitbull-type dog is vet checked and up to date on all shots. She is registered with the UKC and Potty Trained, plus comes with a health guarantee provided by the breeder. Niki is family raised with children and she loves to cuddle and play.",
    // } as Pet,

    // {
    //     id: 'stella', size: 'Mini', name: 'STELLA ', image: 'assets/img/Lucy.jpg',
    //     gender: 'Female', age: "8 Weeks", ageNumber: 8, price: 700, reserve_fee: 250,
    //     registered: "AKC Registered", status: 'Available', WandH: '20 lbs & 10 Inches',
    //     description: "Check out, Stella! She is an adorable Pitbull puppy with a bubbly spirit. This precious little girl loves to play and is ready to join in all of your family fun. She is vet checked and up to date on all shots and wormer. She is registered with the UKC, plus comes with a health guarantee.",
    // } as Pet,

    // {
    //     id: 'anthoine', size: 'Mini', name: 'Anthoine ', image: 'assets/img/Lucy.jpg',
    //     gender: 'Male', age: "8 Weeks", ageNumber: 8, price: 700, reserve_fee: 250,
    //     registered: "AKC Registered", status: 'Available', WandH: '20 lbs & 10 Inches',
    //     description: "Check out, Stella! She is an adorable Pitbull puppy with a bubbly spirit. This precious little girl loves to play and is ready to join in all of your family fun. She is vet checked and up to date on all shots and wormer. She is registered with the UKC, plus comes with a health guarantee.",
    // } as Pet,

    // New Aussie Puppies ************************************************************************

    {
        id: 'dieser', size: 'Mini', name: 'DIESER', image: 'assets/img/aussies/dieser.png',
        gender: 'Male', age: "9 Weeks", ageNumber: 9, price: 700, reserve_fee: 250,
        registered: "AKC Registered", status: 'Available', WandH: '20 lbs & 7 Inches',
        description: "Dieser is a precious little Aussie puppy who is just as cute as can be! This social aussie-type dog is vet checked and up to date on all shots. She is registered with the AKC and Potty Trained, plus comes with a health guarantee provided by the breeder. Dieser is family raised with children and she loves to cuddle and play.",
    } as Pet,

    {
        id: 'daisy', size: 'Standard', name: 'DAISY ', image: 'assets/img/aussies/daisy.jpg',
        gender: 'Female', age: "10 Weeks", ageNumber: 10, price: 700, reserve_fee: 250,
        registered: "AKC Registered", status: 'Available', WandH: '20 lbs & 8 Inches',
        description: "Check out, Daisy! She is an adorable Aussie puppy with a bubbly spirit. This precious little girl loves to play and is ready to join in all of your family fun. She is vet checked and up to date on all shots. She is registered with the AKC, plus comes with a health guarantee.",
    } as Pet,

    {
        id: 'micky', size: 'Mini', name: 'MICKY ', image: 'assets/img/aussies/micky.jpeg',
        gender: 'Male', age: "9 Weeks", ageNumber: 9, price: 700, reserve_fee: 250,
        registered: "AKC Registered", status: 'Available', WandH: '13 lbs & 5 Inches',
        description: "Here comes Micky, a very loyal baby boy who can make you smile with just the way he wags his tail. He has a wonderful disposition, not forgeting to mention that he is as healthy as an ideal puppy can be! Micky is up to date on all vaccinations and vet checked from head to tail. choose Micky today!",
    } as Pet,

    {
        id: 'jake', size: 'Standard', name: 'JAKE ', image: 'assets/img/aussies/jake.png',
        gender: 'Male', age: "11 Weeks", ageNumber: 11, price: 700, reserve_fee: 250,
        registered: "AKC Registered", status: 'Available', WandH: '15 lbs & 5.2 Inches',
        description: "Jake is a calm and cool when it comes to personality, but can also be friendly and loves others around him. This baby is going to make a great puppy and playmate to his family. He likes eating a lot and be sure he's gonna grow big in a space of no time.",
    } as Pet,

    {
        id: 'leo', size: 'Mini', name: 'LEO ', image: 'assets/img/aussies/leo-1.jpeg',
        gender: 'Male', age: "9 Weeks", ageNumber: 9, price: 700, reserve_fee: 250,
        registered: "AKC Registered", status: 'Available', WandH: '13.4 lbs & 5 Inches',
        description: "Leo is a little black-tri boy ready to cuddle and play anytime as far as his belly is satisfied. Current on all shots and friendly to other breeds. He likes walking which makes him a good companion for sport.",
    } as Pet,

    {
        id: 'loic', size: 'Mini', name: 'LOIC ', image: 'assets/img/aussies/loic.jpeg',
        gender: 'Male', age: "9 Weeks", ageNumber: 9, price: 700, reserve_fee: 250,
        registered: "AKC Registered", status: 'Available', WandH: '13.2 lbs & 5 Inches',
        description: "Loic is calm and observes a lot but can be the most agitated one when he feels as to play around. His change of mood makes his particularity as he can easily match with someone calm and reserved in nature.",
    } as Pet,

    {
        id: 'lucy', size: 'Standard', name: 'LUCY ', image: 'assets/img/aussies/lucy.jpeg',
        gender: 'Female', age: "9 Weeks", ageNumber: 9, price: 700, reserve_fee: 250,
        registered: "AKC Registered", status: 'Available', WandH: '14 lbs & 5 Inches',
        description: "Lucy is not the type that can play with anyone, however she is attached and play often with people she knows as well. You can watch your favorite television shows with her as she also like watching the screen. Lucy is lovely and will always be your side when she used to you, however she can also be naughty when she does not feel attracted.",
    } as Pet,

    {
        id: 'frida', size: 'Standard', name: 'FRIDA ', image: 'assets/img/aussies/frida.jpeg',
        gender: 'Female', age: "12 Weeks", ageNumber: 12, price: 700, reserve_fee: 250,
        registered: "AKC Registered", status: 'Available', WandH: '23 lbs & 8 Inches',
        description: "Frida is a female Aussie pup that loves cute outings like going to the restaurant or attractive and classic places. Walking is much of her thing when going out. If you are looking for a partner you can take along for hangouts or dates then Frida is your choice. Being a female, she has a strong attraction for Men as compared to Women.",
    } as Pet,

    {
        id: 'cookie', size: 'Mini', name: 'COOKIE ', image: 'assets/img/aussies/cookie.png',
        gender: 'Female', age: "10 Weeks", ageNumber: 9, price: 700, reserve_fee: 250,
        registered: "AKC Registered", status: 'Available', WandH: '13.2 lbs & 5 Inches',
        description: "Cookie is a super dark red Aussie. He is used to being around other dogs. We would love to have you come out and see this puppy and their Mama. If you can’t make the drive we can assist you with shipping arrangements. If you would like to hear more about this little puppy give us a call!",
    } as Pet,

    {
        id: 'mac', size: 'Standard', name: 'MAC ', image: 'assets/img/aussies/mac.png',
        gender: 'Male', age: "12 Weeks", ageNumber: 12, price: 700, reserve_fee: 250,
        registered: "AKC Registered", status: 'Available', WandH: '20.5 lbs & 9 Inches',
        description: "Meet Mac, a friendly Australian Shepherd puppy who is well socialized being family raised with children! This playful pooch is vet checked, up to date on vaccinations and dewormer, plus Mac comes with a 6 months genetic health guarantee to support you through his growth.",
    } as Pet,

    {
        id: 'hugo', size: 'Standard', name: 'HUGO ', image: 'assets/img/aussies/hugo.jpeg',
        gender: 'Male', age: "12 Weeks", ageNumber: 12, price: 700, reserve_fee: 250,
        registered: "AKC Registered", status: 'Available', WandH: '23 lbs & 10 Inches',
        description: "Hugo is vet checked and up to date on all shots, he goes with 1 Year genetic health guarantee so you don't bother about spending on his health. This cutie is AKC registered and love being around other puppies or any playmate.",
    } as Pet,

    {
        id: 'elsa', size: 'Standard', name: 'ELSA ', image: 'assets/img/aussies/elsa.jpeg',
        gender: 'Female', age: "11 Weeks", ageNumber: 9, price: 700, reserve_fee: 250,
        registered: "AKC Registered", status: 'Available', WandH: '19 lbs & 9 Inches',
        description: "Elsa is a cute little bundle. She has some deep striking colors.  She is used to being around small children and has received plenty of attention as she is also gives much attention. These little one is current on all shots and would love to pair with someone who knows how to be caring.",
    } as Pet,

    {
        id: 'kai-and-rosa', size: 'Standard', name: 'KAI & ROSA ', image: 'assets/img/aussies/kai-n-rosa.jpg',
        gender: 'Male & Female', age: "6 Months", ageNumber: 9, price: 900, reserve_fee: 250,
        registered: "AKC Registered", status: 'Available', WandH: '30 & 27 lbs & 11 & 9 Inches',
        description: "These are gorgeous energetic Aussie parents. Current on all shots, dewormer, and vet checked. These parents had some rescued babies living on the premises who was eventually adopted. We offer them at a good rate. Adopting a pet may not save a life but for those homeless pets, it does.",
    } as Pet,
]