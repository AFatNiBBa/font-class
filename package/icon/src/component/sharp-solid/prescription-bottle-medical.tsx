
import { Icon } from "../../index";

/**
 * A component that renders the `prescription-bottle-medical` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/prescription-bottle-medical?s=sharp-solid prescription-bottle-medical}
 * @preview ![prescription-bottle-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/prescription-bottle-medical.svg)
 */
const PrescriptionBottleMedical: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 0L384 0l0 96L0 96 0 0zM32 128l320 0 0 384L32 512l0-384zm128 96l0 64-64 0 0 64 64 0 0 64 64 0 0-64 64 0 0-64-64 0 0-64-64 0z" />
    </Icon>
);

export default PrescriptionBottleMedical;