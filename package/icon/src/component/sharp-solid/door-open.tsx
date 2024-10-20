
import { Icon } from "../../index";

/**
 * A component that renders the `door-open` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/door-open?s=sharp-solid door-open}
 * @preview ![door-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/door-open.svg)
 */
const DoorOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 0L64 64l0 384-32 0L0 448l0 64 32 0 32 0 256 0L320 0zM256 256c0 17.7-10.7 32-24 32s-24-14.3-24-32s10.7-32 24-32s24 14.3 24 32zm96-128l96 0 0 352 0 32 32 0 64 0 32 0 0-64-32 0-32 0 0-352 0-32-32 0L352 64l0 64z" />
    </Icon>
);

export default DoorOpen;