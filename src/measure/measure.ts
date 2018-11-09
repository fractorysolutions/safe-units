import { GenericMeasure } from "./genericMeasure";
import { createMeasureType, GenericMeasureFactory } from "./genericMeasureFactory";
import { Unit } from "./unitTypeArithmetic";

export type Measure<U extends Unit> = GenericMeasure<number, U>;
export const Measure: GenericMeasureFactory<number> = createMeasureType({
    one: () => 1,
    neg: x => -x,
    add: (x, y) => x + y,
    sub: (x, y) => x - y,
    mult: (x, y) => x * y,
    div: (x, y) => x / y,
    pow: (x, y) => x ** y,
    compare: (x, y) => x - y,
    format: x => `${x}`,
});
