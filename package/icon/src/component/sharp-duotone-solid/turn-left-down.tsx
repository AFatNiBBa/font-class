
import { Icon, generic } from "../../index";

/**
 * A component that renders the `turn-left-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-left-down?s=sharp-duotone-solid turn-left-down}
 * @preview ![turn-left-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/turn-left-down.svg)
 */
const TurnLeftDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M144 0L384 0l0 96L240 96l0 224-96 0L144 0z" />
        <path d="M32 352L192 512 352 352l0-32L32 320l0 32z" />
    </Icon>
);

export default TurnLeftDown;