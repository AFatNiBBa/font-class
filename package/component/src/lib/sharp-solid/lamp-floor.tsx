
import { Icon } from "../../index";

/**
 * A component that renders the `lamp-floor` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lamp-floor?s=sharp-solid lamp-floor}
 * @preview ![lamp-floor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/lamp-floor.svg)
 */
const LampFloor: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 224L64 0 320 0l64 224L0 224zm160 32l64 0 0 192 64 0 32 0 0 64-32 0-96 0-96 0-32 0 0-64 32 0 64 0 0-192z" />
    </Icon>
);

export default LampFloor;