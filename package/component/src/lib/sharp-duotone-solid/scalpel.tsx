
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scalpel` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scalpel?s=sharp-duotone-solid scalpel}
 * @preview ![scalpel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/scalpel.svg)
 */
const Scalpel: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 512L176 320l112 0C288 496 0 512 0 512z" />
        <path d="M495.1 115.7L320 320H128L396.2 22C408.8 8 426.8 0 445.6 0C482.3 0 512 29.7 512 66.4v3.7c0 16.7-6 32.9-16.9 45.6z" />
    </Icon>
);

export default Scalpel;