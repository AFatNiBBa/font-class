
import { Icon } from "../../index";

/**
 * A component that renders the `left-long` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-long?s=sharp-regular left-long}
 * @preview ![left-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/left-long.svg)
 */
const LeftLong: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 224l48 0 256 0 0 64-256 0-48 0 0 48 0 12.1L67.9 256 160 163.9l0 12.1 0 48zM33.9 222.1L0 256l33.9 33.9L160 416l48 0 0-32 0-16 0-32 48 0 208 0 48 0 0-48 0-64 0-48-48 0-208 0-48 0 0-32 0-16 0-32-48 0L33.9 222.1z" />
    </Icon>
);

export default LeftLong;