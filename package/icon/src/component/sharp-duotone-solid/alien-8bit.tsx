
import { Icon, generic } from "../../index";

/**
 * A component that renders the `alien-8bit` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alien-8bit?s=sharp-duotone-solid alien-8bit}
 * @preview ![alien-8bit](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/alien-8bit.svg)
 */
const Alien_8bit: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 128L0 288l64 0 0 96 64 0 0 96 64 0 64 0 0-64-64 0 0-32 192 0 0 32-64 0 0 64 64 0 64 0 0-96 64 0 0-96 64 0 0-160-64 0 0 96-32 0 0-64-64 0 0-32 0-32 64 0 0-64-64 0 0 32-64 0 0 64-128 0 0-64-64 0 0-32L96 32l0 64 64 0 0 32 0 32-64 0 0 64-32 0 0-96L0 128zm160 96l64 0 0 96-64 0 0-96zm192 0l64 0 0 96-64 0 0-96z" />
        <path d="M224 224l-64 0 0 96 64 0 0-96zm192 0l-64 0 0 96 64 0 0-96z" />
    </Icon>
);

export default Alien_8bit;