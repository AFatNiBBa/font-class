
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grip` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grip?s=sharp-duotone-solid grip}
 * @preview ![grip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/grip.svg)
 */
const Grip: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 288l128 0 0 128L0 416 0 288zm160 0l128 0 0 128-128 0 0-128zm160 0l128 0 0 128-128 0 0-128z" />
        <path d="M0 96l128 0 0 128L0 224 0 96zm160 0l128 0 0 128-128 0 0-128zm288 0l0 128-128 0 0-128 128 0z" />
    </Icon>
);

export default Grip;