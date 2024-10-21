
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hammer-war` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hammer-war?s=sharp-duotone-solid hammer-war}
 * @preview ![hammer-war](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hammer-war.svg)
 */
const HammerWar: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M160 0l0 32 0 24.9c10.7 2.4 21.3 4.7 32 7.1l32-7.1L224 32l0-32L160 0zm0 263.1L160 480l0 32 64 0 0-32 0-216.9L192 256l-32 7.1z" />
        <path d="M0 288V32H48L192 64 336 32h48V288H336L192 256 48 288H0z" />
    </Icon>
);

export default HammerWar;