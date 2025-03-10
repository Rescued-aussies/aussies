import { Deserializable } from "./deserializable";
import { Pet } from "./pet.model";

export class Item implements Deserializable{
    pet: Pet;
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}

