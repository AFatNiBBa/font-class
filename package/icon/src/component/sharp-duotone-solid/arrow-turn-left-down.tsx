
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-turn-left-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-left-down?s=sharp-duotone-solid arrow-turn-left-down}
 * @preview ![arrow-turn-left-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-turn-left-down.svg)
 */
const ArrowTurnLeftDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M160 0l0 32 0 357.5c10.7 10.7 21.3 21.3 32 32c10.7-10.7 21.4-21.3 32-32L224 64l128 0 32 0 0-64L352 0 192 0 160 0z" />
        <path d="M365.2 338.7l-22.6 22.6-128 128L192 512l-22.6-22.6-128-128L18.7 338.7 64 293.5l22.6 22.6L192 421.5 297.4 316.1 320 293.5l45.3 45.3z" />
    </Icon>
);

export default ArrowTurnLeftDown;