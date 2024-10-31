
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hammer-war` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hammer-war?s=duotone hammer-war}
 * @preview ![hammer-war](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hammer-war.svg)
 */
const HammerWar: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M160 32l0 18.8c9.1 1.4 18.2 2.7 27.3 4.1c3.1 .5 6.3 .5 9.5 0c9.1-1.4 18.2-2.7 27.3-4.1L224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32zm0 237.2L160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.8c-9.1-1.4-18.2-2.7-27.3-4.1c-3.1-.5-6.3-.5-9.5 0c-9.1 1.4-18.2 2.7-27.3 4.1z" />
        <path d="M36.7 32.4c-9.2-1.4-18.6 1.3-25.6 7.4S0 54.7 0 64L0 256c0 9.3 4.1 18.2 11.1 24.2s16.4 8.8 25.6 7.4l150.5-22.6c3.1-.5 6.3-.5 9.5 0l150.5 22.6c9.2 1.4 18.6-1.3 25.6-7.4s11.1-14.9 11.1-24.2l0-192c0-9.3-4.1-18.2-11.1-24.2s-16.4-8.8-25.6-7.4L196.7 54.9c-3.1 .5-6.3 .5-9.5 0L36.7 32.4z" />
    </Icon>
);

export default HammerWar;