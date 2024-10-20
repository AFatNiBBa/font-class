
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle?s=sharp-duotone-solid circle}
 * @preview ![circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle.svg)
 */
const Circle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </Icon>
);

export default Circle;