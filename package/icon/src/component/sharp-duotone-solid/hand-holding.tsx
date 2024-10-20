
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-holding` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-holding?s=sharp-duotone-solid hand-holding}
 * @preview ![hand-holding](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hand-holding.svg)
 */
const HandHolding: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M68.8 384L140 327l8.8-7 11.2 0 64 0 64 0 64 0 32 0 0 64-32 0-64 0-32 0 0 32 138.8 0 94.5-65 33-22.7 45.3 65.9-33 22.7-128 88-10.2 7L384 512l-160 0L32 512 0 512 0 384l68.8 0z" />
    </Icon>
);

export default HandHolding;