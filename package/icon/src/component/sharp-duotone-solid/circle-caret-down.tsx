
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-caret-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-down?s=sharp-duotone-solid circle-caret-down}
 * @preview ![circle-caret-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-caret-down.svg)
 */
const CircleCaretDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128-48l256 0 0 32L256 368 128 240l0-32z" />
        <path d="M128 208v32L256 368 384 240V208H128z" />
    </Icon>
);

export default CircleCaretDown;