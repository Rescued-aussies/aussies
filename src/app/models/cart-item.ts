import { Pet } from "./pet.model";
import { Deserializable } from "./deserializable";

export class CartItem implements Deserializable{
    pet: Pet;
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
