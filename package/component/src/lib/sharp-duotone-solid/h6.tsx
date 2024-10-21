
import { Icon, generic } from "../../index";

/**
 * A component that renders the `h6` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h6?s=sharp-duotone-solid h6}
 * @preview ![h6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/h6.svg)
 */
const H6: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 96 0 256 0 416l0 32 64 0 0-32 0-128 192 0 0 128 0 32 64 0 0-32 0-160 0-160 0-32-64 0 0 32 0 128L64 224 64 96l0-32L0 64z" />
        <path d="M386.6 198.4L485.1 64l79.4 0-70.4 96c.6 0 1.3 0 1.9 0c79.5 0 144 64.5 144 144s-64.5 144-144 144s-144-64.5-144-144c0-38 12.1-75 34.6-105.6zM416 304a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
    </Icon>
);

export default H6;