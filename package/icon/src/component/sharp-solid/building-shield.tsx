
import { Icon } from "../../index";

/**
 * A component that renders the `building-shield` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/building-shield?s=sharp-solid building-shield}
 * @preview ![building-shield](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/building-shield.svg)
 */
const BuildingShield: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 0L384 0l0 208.3L343.4 224 320 224l-48 0-16 0 0 16 0 17.8 0 30.2 0 8 0 8c0 .9 .1 1.8 .2 2.7c3 74 37.4 156.5 105.9 205.3L240 512l0-128-96 0 0 128L0 512 0 0zM128 224l-64 0 0 64 64 0 0-64zm32 0l0 64 64 0 0-64-64 0zM64 96l0 64 64 0 0-64L64 96zm160 0l-64 0 0 64 64 0 0-64zm32 0l0 64 64 0 0-64-64 0zM527.3 312.4L432 275.5l0 184.9c56.5-26.3 90.2-87 95.3-148zM432 512c-96-32-144-130.2-144-216l0-16.2L432 224l144 55.8 0 16.2c0 85.8-48 184-144 216z" />
    </Icon>
);

export default BuildingShield;