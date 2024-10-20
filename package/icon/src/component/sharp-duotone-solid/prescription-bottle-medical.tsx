
import { Icon, generic } from "../../index";

/**
 * A component that renders the `prescription-bottle-medical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/prescription-bottle-medical?s=sharp-duotone-solid prescription-bottle-medical}
 * @preview ![prescription-bottle-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/prescription-bottle-medical.svg)
 */
const PrescriptionBottleMedical: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M32 96l320 0 0 416L32 512 32 96zM96 256l0 64 64 0 0 64 64 0 0-64 64 0 0-64-64 0 0-64-64 0 0 64-64 0z" />
        <path d="M384 0L0 0 0 96l384 0 0-96zM160 192l0 64-64 0 0 64 64 0 0 64 64 0 0-64 64 0 0-64-64 0 0-64-64 0z" />
    </Icon>
);

export default PrescriptionBottleMedical;