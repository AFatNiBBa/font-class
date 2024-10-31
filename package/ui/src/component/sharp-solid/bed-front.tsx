
import { Icon } from "../../index";

/**
 * A component that renders the `bed-front` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed-front?s=sharp-solid bed-front}
 * @preview ![bed-front](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bed-front.svg)
 */
const BedFront: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32l448 0 0 160-32 0-16 0 0-64-160 0 0 64-32 0 0-64L80 128l0 64-16 0-32 0L32 32zM0 224l32 0 448 0 32 0 0 32 0 192 0 32-64 0 0-32 0-32L64 416l0 32 0 32L0 480l0-32L0 256l0-32z" />
    </Icon>
);

export default BedFront;