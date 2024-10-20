
import { Icon, generic } from "../../index";

/**
 * A component that renders the `prescription-bottle-pill` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/prescription-bottle-pill?s=sharp-duotone-solid prescription-bottle-pill}
 * @preview ![prescription-bottle-pill](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/prescription-bottle-pill.svg)
 */
const PrescriptionBottlePill: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 96l384 0 0-96L0 0zM32 128l0 64 112 0 16 0 0 32-16 0L32 224l0 64 112 0 16 0 0 32-16 0L32 320l0 64 112 0 16 0 0 32-16 0L32 416l0 96 298.8 0C285.6 480.1 256 427.5 256 368c0-68.4 39-127.7 96-156.8l0-83.2L32 128z" />
        <path d="M319.5 278.1C299.8 302.8 288 334 288 368c0 79.5 64.5 144 144 144c34 0 65.2-11.8 89.9-31.5L319.5 278.1zm225 179.8C564.2 433.2 576 402 576 368c0-79.5-64.5-144-144-144c-34 0-65.2 11.8-89.9 31.5L544.5 457.9z" />
    </Icon>
);

export default PrescriptionBottlePill;