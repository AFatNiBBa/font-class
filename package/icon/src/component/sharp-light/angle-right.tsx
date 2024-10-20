
import { Icon } from "../../index";

/**
 * A component that renders the `angle-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle-right?s=sharp-light angle-right}
 * @preview ![angle-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/angle-right.svg)
 */
const AngleRight: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M278.6 256l-11.3 11.3-160 160L96 438.6 73.4 416l11.3-11.3L233.4 256 84.7 107.3 73.4 96 96 73.4l11.3 11.3 160 160L278.6 256z" />
    </Icon>
);

export default AngleRight;