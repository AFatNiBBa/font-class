
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-to-arc` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-to-arc?s=sharp-regular arrow-right-to-arc}
 * @preview ![arrow-right-to-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrow-right-to-arc.svg)
 */
const ArrowRightToArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M232.3 134.4l112 104L363.3 256l-18.9 17.6-112 104-17.6 16.3-32.7-35.2 17.6-16.3L266.9 280 24 280 0 280l0-48 24 0 242.9 0-67.2-62.4-17.6-16.3 32.7-35.2 17.6 16.3zM464 256c0-114.9-93.1-208-208-208l-24 0 0-48 24 0C397.4 0 512 114.6 512 256s-114.6 256-256 256l-24 0 0-48 24 0c114.9 0 208-93.1 208-208z" />
    </Icon>
);

export default ArrowRightToArc;