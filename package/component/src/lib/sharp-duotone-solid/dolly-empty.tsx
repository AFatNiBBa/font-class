
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dolly-empty` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dolly-empty?s=sharp-duotone-solid dolly-empty}
 * @preview ![dolly-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/dolly-empty.svg)
 */
const DollyEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M351.9 416A96 96 0 1 1 160 416a96 96 0 1 1 191.9 0z" />
        <path d="M32 0L0 0 0 64l32 0 72.9 0L197 340.2c16.3-12.7 36.7-20.2 59-20.2c.6 0 1.2 0 1.7 0L158.4 21.9 151.1 0 128 0 32 0zM331.8 357c12.7 16.3 20.2 36.7 20.2 59c0 .6 0 1.2 0 1.7l202.1-67.4 30.4-10.1-20.2-60.7-30.4 10.1L331.8 357z" />
    </Icon>
);

export default DollyEmpty;