
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dice-d6` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d6?s=sharp-duotone-solid dice-d6}
 * @preview ![dice-d6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/dice-d6.svg)
 */
const DiceD6: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M16 112L224 240 432 112 224 0 16 112z" />
        <path d="M0 144L208 272l0 240L0 384 0 144zm448 0l0 240L240 512l0-240L448 144z" />
    </Icon>
);

export default DiceD6;