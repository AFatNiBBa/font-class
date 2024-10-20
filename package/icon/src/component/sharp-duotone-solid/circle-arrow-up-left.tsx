
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-arrow-up-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-up-left?s=sharp-duotone-solid circle-arrow-up-left}
 * @preview ![circle-arrow-up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-arrow-up-left.svg)
 */
const CircleArrowUpLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM144 144l24 0 152 0 24 0 0 48-24 0-94.1 0L361 327l17 17L344 377.9l-17-17-135-135L192 328l0 24-48 0 0-24 0-160 0-24z" />
        <path d="M144 144l24 0 152 0 24 0 0 48-24 0-94.1 0L361 327l17 17L344 377.9l-17-17-135-135L192 328l0 24-48 0 0-24 0-160 0-24z" />
    </Icon>
);

export default CircleArrowUpLeft;