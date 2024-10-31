
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-right?s=sharp-duotone-solid up-right}
 * @preview ![up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/up-right.svg)
 */
const UpRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 368l80 80L232 296l-80-80L0 368z" />
        <path d="M368 80V368l-32 32L48 112 80 80H368z" />
    </Icon>
);

export default UpRight;