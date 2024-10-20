
import { Icon, generic } from "../../index";

/**
 * A component that renders the `do-not-enter` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/do-not-enter?s=sharp-duotone-solid do-not-enter}
 * @preview ![do-not-enter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/do-not-enter.svg)
 */
const DoNotEnter: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M80 208l352 0 0 96L80 304l0-96z" />
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM432 208l0 96L80 304l0-96 352 0z" />
    </Icon>
);

export default DoNotEnter;