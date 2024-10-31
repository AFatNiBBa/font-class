
import { Icon } from "../../index";

/**
 * A component that renders the `lamp-floor` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lamp-floor?s=sharp-thin lamp-floor}
 * @preview ![lamp-floor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/lamp-floor.svg)
 */
const LampFloor: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16.6 224L0 224l4.6-16L64 0 320 0l59.4 208 4.6 16-16.6 0L16.6 224zm346.1-16L307.9 16 76.1 16 21.2 208l341.6 0zM72 496l112 0 0-240 16 0 0 240 112 0 8 0 0 16-8 0-120 0L72 512l-8 0 0-16 8 0z" />
    </Icon>
);

export default LampFloor;