
import { Icon } from "../../index";

/**
 * A component that renders the `gun` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gun?s=sharp-solid gun}
 * @preview ![gun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/gun.svg)
 */
const Gun: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M528 32l0 24 0 8 48 0 0 144-96 0-32 32-47.1 0-34.3 96.1L360.9 352 344 352l-120 0L192 480 32 480 92 240 0 240 0 64l480 0 0-8 0-24 48 0zM327.1 304l22.9-64L252 240l-16 64 91.1 0zM480 128L64 128l0 32 416 0 0-32z" />
    </Icon>
);

export default Gun;