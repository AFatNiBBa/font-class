
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-signal` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-signal?s=sharp-light mobile-signal}
 * @preview ![mobile-signal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/mobile-signal.svg)
 */
const MobileSignal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 32l256 0 0 265.3c10.1-9 20.7-17.3 32-24.8L352 32l0-32L320 0 64 0 32 0l0 32 0 448 0 32 32 0 160 0c0-10.8 .6-21.5 1.8-32L64 480 64 32zM240 400l-16 0-64 0-16 0 0 32 16 0 64 0 11.3 0c1.4-5 3-10 4.7-14.9l0-17.1zM512 288l0-32c-141.4 0-256 114.6-256 256l32 0c0-123.7 100.3-224 224-224zM480 512a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-96 0c0-70.7 57.3-128 128-128l0-32c-88.4 0-160 71.6-160 160l32 0z" />
    </Icon>
);

export default MobileSignal;