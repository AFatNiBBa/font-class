
import { Icon, generic } from "../../index";

/**
 * A component that renders the `worm` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/worm?s=duotone worm}
 * @preview ![worm](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/worm.svg)
 */
const Worm: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 312L0 464c0 26.5 21.5 48 48 48s48-21.5 48-48l0-152c0-30.9 25.1-56 56-56s56 25.1 56 56l0 48c0 83.9 68.1 152 152 152s152-68.1 152-152l0-168 0-16 0-86.4C512 40.1 471.9 0 422.4 0L384 0c-53 0-96 43-96 96s43 96 96 96l32 0 0 168c0 30.9-25.1 56-56 56s-56-25.1-56-56l0-48c0-83.9-68.1-152-152-152S0 228.1 0 312zM432 88a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M384 88a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default Worm;