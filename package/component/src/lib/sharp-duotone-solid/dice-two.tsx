
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dice-two` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-two?s=sharp-duotone-solid dice-two}
 * @preview ![dice-two](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/dice-two.svg)
 */
const DiceTwo: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l448 0 0 448L0 480 0 32zM96 160a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM288 352a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M128 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM320 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default DiceTwo;