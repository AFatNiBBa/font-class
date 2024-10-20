
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sword` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sword?s=sharp-duotone-solid sword}
 * @preview ![sword](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sword.svg)
 */
const Sword: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M144 272L400 16 512 0 496 112 240 368l-96-96z" />
        <path d="M96 512L0 416l32-32 32 16 56-56L64 256l32-32L288 416l-32 32-88-56-56 56 16 32L96 512z" />
    </Icon>
);

export default Sword;