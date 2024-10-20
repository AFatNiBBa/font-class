
import { Icon, generic } from "../../index";

/**
 * A component that renders the `popsicle` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/popsicle?s=duotone popsicle}
 * @preview ![popsicle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/popsicle.svg)
 */
const Popsicle: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 160L0 336c0 26.5 21.5 48 48 48l80 0 0-192c0-17.7 14.3-32 32-32s32 14.3 32 32l0 192 80 0c26.5 0 48-21.5 48-48l0-176C320 71.6 248.4 0 160 0S0 71.6 0 160z" />
        <path d="M128 192c0-17.7 14.3-32 32-32s32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V192z" />
    </Icon>
);

export default Popsicle;