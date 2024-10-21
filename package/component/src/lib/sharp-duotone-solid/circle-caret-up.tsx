
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-caret-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-up?s=sharp-duotone-solid circle-caret-up}
 * @preview ![circle-caret-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-caret-up.svg)
 */
const CircleCaretUp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128 16L256 144 384 272l0 32-256 0 0-32z" />
        <path d="M128 304V272L256 144 384 272v32H128z" />
    </Icon>
);

export default CircleCaretUp;