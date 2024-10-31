
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dice-d8` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d8?s=sharp-duotone-solid dice-d8}
 * @preview ![dice-d8](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/dice-d8.svg)
 */
const DiceD8: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 248l240 88L240 0 0 248zM272 0l0 336 240-88L272 0z" />
        <path d="M240 368L32 291.7 240 512l0-144zm32 0l0 144L480 291.7 272 368z" />
    </Icon>
);

export default DiceD8;