
import { Icon, generic } from "../../index";

/**
 * A component that renders the `turn-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-down?s=sharp-duotone-solid turn-down}
 * @preview ![turn-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/turn-down.svg)
 */
const TurnDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 96l48 0 96 0 0 224 96 0 0-272 0-48L192 0 48 0 0 0z" />
        <path d="M352 352L192 512 32 352l0-32 320 0 0 32z" />
    </Icon>
);

export default TurnDown;