
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-turn-left-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-left-up?s=sharp-duotone-solid arrow-turn-left-up}
 * @preview ![arrow-turn-left-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-turn-left-up.svg)
 */
const ArrowTurnLeftUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M160 122.5c10.7-10.7 21.3-21.3 32-32c10.7 10.7 21.3 21.3 32 32L224 448l128 0 32 0 0 64-32 0-160 0-32 0 0-32 0-357.5z" />
        <path d="M365.3 173.3l-22.6-22.6-128-128L192 0 169.4 22.6l-128 128L18.7 173.3 64 218.5l22.6-22.6L192 90.5 297.4 195.9 320 218.5l45.3-45.3z" />
    </Icon>
);

export default ArrowTurnLeftUp;