
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-cross` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-cross?s=sharp-duotone-solid arrows-cross}
 * @preview ![arrows-cross](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrows-cross.svg)
 */
const ArrowsCross: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M2.7 80L48 34.7 70.6 57.4 224 210.7c-15.1 15.1-30.2 30.2-45.3 45.3L25.4 102.6 2.7 80zM224 301.3L269.3 256 384 370.7l0-50.7 0-32 64 0 0 32 0 128 0 32-32 0-128 0-32 0 0-64 32 0 50.7 0L224 301.3z" />
        <path d="M256 32l32 0 128 0 32 0 0 32 0 128 0 32-64 0 0-32 0-50.7L70.6 454.6 48 477.3 2.7 432l22.6-22.6L338.7 96 288 96l-32 0 0-64z" />
    </Icon>
);

export default ArrowsCross;