
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hockey-puck` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hockey-puck?s=duotone hockey-puck}
 * @preview ![hockey-puck](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hockey-puck.svg)
 */
const HockeyPuck: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 160c0 53 114.6 96 256 96s256-43 256-96s-114.6-96-256-96S0 107 0 160z" />
        <path d="M256 256c141.4 0 256-43 256-96l0 192c0 53-114.6 96-256 96S0 405 0 352L0 160c0 53 114.6 96 256 96z" />
    </Icon>
);

export default HockeyPuck;