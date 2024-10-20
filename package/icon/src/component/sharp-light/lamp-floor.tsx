
import { Icon } from "../../index";

/**
 * A component that renders the `lamp-floor` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lamp-floor?s=sharp-light lamp-floor}
 * @preview ![lamp-floor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/lamp-floor.svg)
 */
const LampFloor: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M33.3 224L0 224l9.1-32L64 0 320 0l54.9 192 9.1 32-33.3 0L33.3 224zm308.3-32L295.9 32 88.1 32 42.4 192l299.2 0zM80 480l96 0 0-224 32 0 0 224 96 0 16 0 0 32-16 0-112 0L80 512l-16 0 0-32 16 0z" />
    </Icon>
);

export default LampFloor;