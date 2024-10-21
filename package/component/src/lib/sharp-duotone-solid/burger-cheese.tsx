
import { Icon, generic } from "../../index";

/**
 * A component that renders the `burger-cheese` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/burger-cheese?s=sharp-duotone-solid burger-cheese}
 * @preview ![burger-cheese](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/burger-cheese.svg)
 */
const BurgerCheese: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 192s0-160 224-160s224 160 224 160l0 32L32 224l0-32zm0 192l448 0 0 96L32 480l0-96zm80-256a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zM224 256c64 0 128 0 192 0c-32 21.3-64 42.7-96 64c-32-21.3-64-42.7-96-64zM240 96a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm128 32a16 16 0 1 0 32 0 16 16 0 1 0 -32 0z" />
        <path d="M320 320l-96-64-32 0s0 0 0 0L16 256l0 96 480 0 0-96-48 0s0 0 0 0l-32 0-96 64z" />
    </Icon>
);

export default BurgerCheese;