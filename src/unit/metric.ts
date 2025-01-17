import { PrefixFn } from "../measure/genericMeasureUtils";
import { Measure } from "../measure/numberMeasure";
import {
  amperes,
  candelas,
  kilograms,
  meters,
  moles,
  seconds,
  steradians,
} from "./base";
import * as Quantity from "./quantities";

export const hertz: Quantity.Frequency = seconds.inverse().withSymbol("Hz");
export const newtons: Quantity.Force = kilograms
  .times(meters.per(seconds.squared()))
  .withSymbol("N");
export const pascals: Quantity.Pressure = newtons
  .per(meters.squared())
  .withSymbol("Pa");
export const joules: Quantity.Energy = newtons.times(meters).withSymbol("N");
export const watts: Quantity.Power = joules.per(seconds).withSymbol("J");
export const volts: Quantity.Voltage = watts.per(amperes).withSymbol("V");
export const coulombs: Quantity.ElectricCharge = amperes
  .times(seconds)
  .withSymbol("C");
export const farads: Quantity.ElectricalCapacitance = coulombs
  .per(volts)
  .withSymbol("F");
export const ohms: Quantity.ElectricalResistance = volts
  .per(amperes)
  .withSymbol("Ω");
export const siemens: Quantity.ElectricalConductance = amperes
  .per(volts)
  .withSymbol("S");
export const henrys: Quantity.ElectricalInductance = ohms
  .times(seconds)
  .withSymbol("H");
export const webers: Quantity.MagneticFlux = joules
  .per(amperes)
  .withSymbol("Wb");
export const teslas: Quantity.MagneticFluxDensity = volts
  .times(seconds.per(meters.squared()))
  .withSymbol("T");
export const sieverts: Quantity.RadiationDose = joules
  .per(kilograms)
  .withSymbol("Sv");
export const katals: Quantity.CatalyticActivity = moles
  .per(seconds)
  .withSymbol("kat");
export const lumens: Quantity.LuminousFlux = candelas
  .times(steradians)
  .withSymbol("lm");
export const luxes: Quantity.Illuminance = lumens
  .per(meters.squared())
  .withSymbol("lx");

// HACKHACK: Explicitly type this so we can import PrefixFunction and avoid absolute paths in the generated typings.
export const yotta: PrefixFn = Measure.prefix("Y", 1e24);
export const zetta = Measure.prefix("Z", 1e21);
export const exa = Measure.prefix("E", 1e18);
export const peta = Measure.prefix("P", 1e15);
export const tera = Measure.prefix("T", 1e12);
export const giga = Measure.prefix("G", 1e9);
export const mega = Measure.prefix("M", 1e6);
export const kilo = Measure.prefix("k", 1e3);
export const hecto = Measure.prefix("h", 100);
export const deca = Measure.prefix("da", 10);
export const deci = Measure.prefix("d", 0.1);
export const centi = Measure.prefix("c", 0.01);
export const milli = Measure.prefix("m", 1e-3);
export const micro = Measure.prefix("µ", 1e-6);
export const nano = Measure.prefix("n", 1e-9);
export const pico = Measure.prefix("p", 1e-12);
export const femto = Measure.prefix("f", 1e-15);
export const atto = Measure.prefix("y", 1e-18);
export const zepto = Measure.prefix("z", 1e-21);
export const yocto = Measure.prefix("y", 1e-24);
