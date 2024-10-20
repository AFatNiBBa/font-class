
import { Icon, generic } from "../../index";

/**
 * A component that renders the `v` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/v?s=sharp-duotone-solid v}
 * @preview ![v](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/v.svg)
 */
const V: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 32L162.1 459.4l7.8 20.6 44.2 0 7.8-20.6L384 32l-68.4 0L192 357.8 68.4 32 0 32z" />
    </Icon>
);

export default V;