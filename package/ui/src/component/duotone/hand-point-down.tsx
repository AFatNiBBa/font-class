
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-point-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-point-down?s=duotone hand-point-down}
 * @preview ![hand-point-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hand-point-down.svg)
 */
const HandPointDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 149l0 27c0 35.3 28.7 64 64 64l88 0c22.1 0 40-17.9 40-40s-17.9-40-40-40l-56 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l56 0c39.8 0 72 32.2 72 72l0 .6c9.4-5.4 20.3-8.6 32-8.6c13.2 0 25.4 4 35.6 10.8c8.7-24.9 32.5-42.8 60.4-42.8c11.7 0 22.6 3.1 32 8.6l0-8.6C384 71.6 312.4 0 224 0L162.3 0C119.8 0 79.1 16.9 49.1 46.9L37.5 58.5C13.5 82.5 0 115.1 0 149zM32 272l0 208c0 17.7 14.3 32 32 32s32-14.3 32-32l0-208-64 0z" />
        <path d="M352 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 64c0 17.7-14.3 32-32 32zm-128 0l0-64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32zm-96 32l0-48c0-17.7 14.3-32 32-32s32 14.3 32 32l0 48c0 17.7-14.3 32-32 32s-32-14.3-32-32z" />
    </Icon>
);

export default HandPointDown;