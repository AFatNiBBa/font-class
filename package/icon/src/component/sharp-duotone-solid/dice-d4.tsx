
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dice-d4` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d4?s=sharp-duotone-solid dice-d4}
 * @preview ![dice-d4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/dice-d4.svg)
 */
const DiceD4: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 320L240 512 240 0 0 320z" />
        <path d="M272 512V0L512 320 272 512z" />
    </Icon>
);

export default DiceD4;