export class ShippingDetails {
    name: string;
    email: string;
    phone: string;
    contactOption: string = "Phone";
    paymentOption: string = "No payment method selected";
    country: string = "";
    state: string = "";
    city: string = "Hidden Field. Details Omitted";
    zip: string = "Hidden Field. Details Omitted";
    address1: string = "";
    address2: string = "";
    notes: String = "";
}