
import { Icon, generic } from "../../index";

/**
 * A component that renders the `burger` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/burger?s=sharp-duotone-solid burger}
 * @preview ![burger](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/burger.svg)
 */
const Burger: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 192l0 32 448 0 0-32s0-160-224-160S32 192 32 192zm0 192l0 96 448 0 0-96L32 384zM144 128a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM272 96a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm128 32a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
        <path d="M16 256H496v96H16V256z" />
    </Icon>
);

export default Burger;