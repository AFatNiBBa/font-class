
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right?s=sharp-duotone-solid arrow-right}
 * @preview ![arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-right.svg)
 */
const ArrowRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 224l0 64 32 0 290.7 0 32-32c-10.7-10.7-21.3-21.3-32-32L32 224 0 224z" />
        <path d="M445.3 256l-22.6 22.6-144 144L256 445.3 210.7 400l22.6-22.6L354.7 256 233.4 134.6 210.7 112 256 66.8l22.6 22.6 144 144L445.3 256z" />
    </Icon>
);

export default ArrowRight;