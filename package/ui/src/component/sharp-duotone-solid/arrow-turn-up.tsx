
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-turn-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-up?s=sharp-duotone-solid arrow-turn-up}
 * @preview ![arrow-turn-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-turn-up.svg)
 */
const ArrowTurnUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 448l0 64 32 0 160 0 32 0 0-32 0-357.5c-10.7-10.7-21.3-21.3-32-32c-10.7 10.7-21.3 21.3-32 32L160 448 32 448 0 448z" />
        <path d="M18.7 173.3l22.6-22.6 128-128L192 0l22.6 22.6 128 128 22.6 22.6L320 218.5l-22.6-22.6L192 90.5 86.6 195.9 64 218.5 18.7 173.3z" />
    </Icon>
);

export default ArrowTurnUp;