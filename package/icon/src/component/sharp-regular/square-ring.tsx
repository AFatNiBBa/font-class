
import { Icon } from "../../index";

/**
 * A component that renders the `square-ring` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-ring?s=sharp-regular square-ring}
 * @preview ![square-ring](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-ring.svg)
 */
const SquareRing: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zM304 256a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 256a128 128 0 1 1 256 0A128 128 0 1 1 96 256z" />
    </Icon>
);

export default SquareRing;