
import { Icon } from "../../index";

/**
 * A component that renders the `left-long` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-long?s=sharp-light left-long}
 * @preview ![left-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/left-long.svg)
 */
const LeftLong: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 296l32 0 288 0 0-80-288 0-32 0 0-32 0-42.7L45.3 256 160 370.7l0-42.7 0-32zm32 88l0 32-32 0L22.6 278.6 0 256l22.6-22.6L160 96l32 0 0 32 0 24 0 32 32 0 256 0 32 0 0 32 0 80 0 32-32 0-256 0-32 0 0 32 0 24z" />
    </Icon>
);

export default LeftLong;