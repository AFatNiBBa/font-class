
import { Icon, generic } from "../../index";

/**
 * A component that renders the `egg` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/egg?s=sharp-duotone-solid egg}
 * @preview ![egg](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/egg.svg)
 */
const Egg: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 288C0 394 86 496 192 496s192-102 192-208c0-112-64-272-192-272S0 176 0 288zm64 0c0-28.3 5.7-61.9 16.9-93.5c11.2-31.5 28.4-62.4 52.3-84.2L154.8 134c-18.8 17.1-33.6 42.7-43.7 71.2C101 233.6 96 263.5 96 288l0 16-32 0 0-16z" />
        <path d="M111.1 205.2C101 233.6 96 263.5 96 288l0 16-32 0 0-16c0-28.3 5.7-61.9 16.9-93.5c11.2-31.5 28.4-62.4 52.3-84.2L154.8 134c-18.8 17.1-33.6 42.7-43.7 71.2z" />
    </Icon>
);

export default Egg;