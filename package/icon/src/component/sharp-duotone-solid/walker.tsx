
import { Icon, generic } from "../../index";

/**
 * A component that renders the `walker` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/walker?s=sharp-duotone-solid walker}
 * @preview ![walker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/walker.svg)
 */
const Walker: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M448 448.1A64 64 0 1 1 320 448a64 64 0 1 1 128 .1z" />
        <path d="M118.7 0L144 0 384 0l32 0 0 32 0 360.6c-9.4-5.4-20.3-8.6-32-8.6s-22.6 3.1-32 8.6L352 224l-220.5 0L71.1 479.4l-7.4 31.1L1.5 495.8l7.4-31.1 104-440L118.7 0zM352 64L169.3 64l-22.7 96L352 160l0-96z" />
    </Icon>
);

export default Walker;