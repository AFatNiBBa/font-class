
import { Icon, generic } from "../../index";

/**
 * A component that renders the `burger-lettuce` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/burger-lettuce?s=sharp-duotone-solid burger-lettuce}
 * @preview ![burger-lettuce](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/burger-lettuce.svg)
 */
const BurgerLettuce: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 192l0 32 448 0 0-32s0-160-224-160S32 192 32 192zm0 192l0 96 448 0 0-96L32 384zM144 128a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM272 96a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm128 32a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
        <path d="M168 253.9l10.9 4 77.1 28 77.1-28 10.9-4 10.9 4 76.9 28L484.8 266 507.2 326l-64 24-11.1 4.2-11.1-4L344 322l-77.1 28L256 354l-10.9-4L168 322l-77.1 28-11.1 4L68.8 350l-64-24L27.2 266l52.9 19.9 76.9-28 10.9-4z" />
    </Icon>
);

export default BurgerLettuce;