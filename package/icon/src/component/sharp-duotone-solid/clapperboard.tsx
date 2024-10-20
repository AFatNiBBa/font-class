
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clapperboard` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clapperboard?s=sharp-duotone-solid clapperboard}
 * @preview ![clapperboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/clapperboard.svg)
 */
const Clapperboard: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 160l6.1 0 67.9 0 92.1 0 67.9 0 92.1 0 67.9 0L512 160l0 320L0 480 0 160z" />
        <path d="M454.1 32L327 159l-1 1-92.1 0L361 33l1-1 92.1 0zM393.9 160L512 41.9 512 160l-118.1 0zM201.9 32l92.1 0L167 159l-1 1-92.1 0L201 33l1-1zm-67.9 0L7 159l-1 1L0 160 0 32l134.1 0z" />
    </Icon>
);

export default Clapperboard;