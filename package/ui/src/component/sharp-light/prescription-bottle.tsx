
import { Icon } from "../../index";

/**
 * A component that renders the `prescription-bottle` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/prescription-bottle?s=sharp-light prescription-bottle}
 * @preview ![prescription-bottle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/prescription-bottle.svg)
 */
const PrescriptionBottle: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 32l0 64L32 96l0-64 320 0zM32 0L0 0 0 32 0 96l0 32 32 0 320 0 32 0 0-32 0-64 0-32L352 0 32 0zm0 160l0 320 0 32 32 0 256 0 32 0 0-32 0-320-32 0 0 320L64 480l0-64 80 0 16 0 0-32-16 0-80 0 0-64 80 0 16 0 0-32-16 0-80 0 0-64 80 0 16 0 0-32-16 0-80 0 0-32-32 0z" />
    </Icon>
);

export default PrescriptionBottle;