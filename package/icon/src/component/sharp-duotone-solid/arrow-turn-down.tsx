
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-turn-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-down?s=sharp-duotone-solid arrow-turn-down}
 * @preview ![arrow-turn-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-turn-down.svg)
 */
const ArrowTurnDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 64l32 0 128 0 0 325.5 32 32 32-32L224 32l0-32L192 0 32 0 0 0z" />
        <path d="M18.7 338.7l22.6 22.6 128 128L192 512l22.6-22.6 128-128 22.6-22.6L320 293.5l-22.6 22.6L192 421.5 86.6 316.1 64 293.5 18.7 338.7z" />
    </Icon>
);

export default ArrowTurnDown;