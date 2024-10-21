
import { Icon } from "../../index";

/**
 * A component that renders the `bed-front` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed-front?s=sharp-regular bed-front}
 * @preview ![bed-front](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bed-front.svg)
 */
const BedFront: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32l0 160 48 0 0-64 160 0 0 64 32 0 0-64 160 0 0 64 48 0 0-160L32 32zM24 224L0 224l0 24L0 392l0 64 0 24 48 0 0-24 0-40 416 0 0 40 0 24 48 0 0-24 0-64 0-144 0-24-24 0L24 224zM464 368L48 368l0-96 416 0 0 96z" />
    </Icon>
);

export default BedFront;