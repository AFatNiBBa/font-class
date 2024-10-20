
import { Icon } from "../../index";

/**
 * A component that renders the `box-open` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-open?s=sharp-regular box-open}
 * @preview ![box-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/box-open.svg)
 */
const BoxOpen: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 160l224 64L320 64 64 32 0 160zM320 64l96 160 224-64L576 32 320 64zm-1.1 64l2.2 0s0 0 0 0l-2.2 0s0 0 0 0zM528 225.3l0 153.2-184 46L344 192l-48 0 0 232.5-184-46 0-153.2L64 211.6 64 416l256 64 256-64 0-204.4-48 13.7z" />
    </Icon>
);

export default BoxOpen;