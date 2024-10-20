
import { Icon, generic } from "../../index";

/**
 * A component that renders the `h4` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h4?s=sharp-duotone-solid h4}
 * @preview ![h4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/h4.svg)
 */
const H4: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 96 0 256 0 416l0 32 64 0 0-32 0-128 192 0 0 128 0 32 64 0 0-32 0-160 0-160 0-32-64 0 0 32 0 128L64 224 64 96l0-32L0 64z" />
        <path d="M384.5 282.2L424.5 64l65.1 0L454.4 256 576 256l0-160 0-32 64 0 0 32 0 320 0 32-64 0 0-32 0-96-160 0-38.4 0 6.9-37.8z" />
    </Icon>
);

export default H4;