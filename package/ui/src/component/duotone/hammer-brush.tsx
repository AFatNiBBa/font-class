
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hammer-brush` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hammer-brush?s=duotone hammer-brush}
 * @preview ![hammer-brush](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hammer-brush.svg)
 */
const HammerBrush: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 144C0 64.5 64.5 0 144 0l54.1 0c21.9 0 42 12.4 51.8 32L288 32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l-38.1 0c-8.3 16.5-23.8 27.9-41.6 31.1c-3.3 .6-6.7 .9-10.2 .9l-66.3 0c-6.9 0-13.6-1-20-2.8c-14.7-4.1-27.7-12.7-37.4-24.6L23.2 158.3c-5 2.5-10.9 2.2-15.6-.7S0 149.5 0 144zM352 320l288 0 0 144c0 26.5-21.5 48-48 48l-105.1 0c-4.1 0-7.8-2.6-9.1-6.6l-20.7-62.1c-2.9-8.8-15.3-8.8-18.2 0l-20.7 62.1c-1.3 3.9-5 6.6-9.1 6.6l-9.1 0c-26.5 0-48-21.5-48-48l0-144z" />
        <path d="M352 464l0 .2L352 320l288 0 0-29.7c0-21.4-10.7-41.4-28.5-53.3l-65.1-43.4c-.8-.5-1.6-.9-2.4-1.2L544 48c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 144.5c-.9 .3-1.7 .7-2.4 1.2L380.5 237c-17.8 11.9-28.5 31.9-28.5 53.3L352 464zM496 64a16 16 0 1 1 0-32 16 16 0 1 1 0 32zM131.8 160c-6.9 0-13.6-1-20-2.8L98.8 448.1C97.3 482.9 125.1 512 160 512s62.7-29.1 61.2-63.9l-12.8-289c-3.3 .6-6.7 .9-10.2 .9l-66.3 0z" />
    </Icon>
);

export default HammerBrush;