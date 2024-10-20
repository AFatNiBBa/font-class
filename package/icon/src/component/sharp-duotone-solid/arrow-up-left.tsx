
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-left?s=sharp-duotone-solid arrow-up-left}
 * @preview ![arrow-up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-up-left.svg)
 */
const ArrowUpLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M96 160l45.3 0L342.6 361.4 365.3 384 320 429.3l-22.6-22.6L96 205.3 96 160z" />
        <path d="M32 96l32 0 224 0 32 0 0 64-32 0L96 160l0 192 0 32-64 0 0-32 0-224 0-32z" />
    </Icon>
);

export default ArrowUpLeft;