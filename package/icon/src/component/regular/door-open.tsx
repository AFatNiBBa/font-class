
import { Icon } from "../../index";

/**
 * A component that renders the `door-open` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/door-open?s=regular door-open}
 * @preview ![door-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/door-open.svg)
 */
const DoorOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M272 49.7L272 464l-160 0 0-371.2L272 49.7zM320 464l0-421.6C320 19 301 0 277.6 0c-3.7 0-7.4 .5-11 1.5L99.5 46.4C78.6 52.1 64 71.1 64 92.8L64 464l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 32 0 16 0 160 0 48 0 0-48zM224 288c13.2 0 24-14.4 24-32s-10.8-32-24-32s-24 14.4-24 32s10.7 32 24 32zM352 112l104 0c4.4 0 8 3.6 8 8l0 368c0 13.3 10.7 24 24 24l64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-344c0-30.9-25.1-56-56-56L352 64l0 48z" />
    </Icon>
);

export default DoorOpen;