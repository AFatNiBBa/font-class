
import { Icon } from "../../index";

/**
 * A component that renders the `prescription-bottle` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/prescription-bottle?s=sharp-solid prescription-bottle}
 * @preview ![prescription-bottle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/prescription-bottle.svg)
 */
const PrescriptionBottle: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 0L384 0l0 96L0 96 0 0zM32 128l320 0 0 384L32 512l0-96 112 0 16 0 0-32-16 0L32 384l0-64 112 0 16 0 0-32-16 0L32 288l0-64 112 0 16 0 0-32-16 0L32 192l0-64z" />
    </Icon>
);

export default PrescriptionBottle;