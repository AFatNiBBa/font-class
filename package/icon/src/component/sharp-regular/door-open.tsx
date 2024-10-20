
import { Icon } from "../../index";

/**
 * A component that renders the `door-open` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/door-open?s=sharp-regular door-open}
 * @preview ![door-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/door-open.svg)
 */
const DoorOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 0L272 12 64 64l0 400-40 0L0 464l0 48 24 0 40 0 32 0 16 0 160 0 48 0 0-48 0-414.5L320 0zM272 61.5L272 464l-160 0 0-362.5 160-40zM224 288c13.2 0 24-14.4 24-32s-10.8-32-24-32s-24 14.4-24 32s10.7 32 24 32zM352 112l112 0 0 376 0 24 24 0 64 0 24 0 0-48-24 0-40 0 0-376 0-24-24 0L352 64l0 48z" />
    </Icon>
);

export default DoorOpen;