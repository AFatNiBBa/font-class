
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-microphone-lines` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-microphone-lines?s=sharp-duotone-solid circle-microphone-lines}
 * @preview ![circle-microphone-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-microphone-lines.svg)
 */
const CircleMicrophoneLines: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128-32l32 0 0 16 0 16c0 53 43 96 96 96s96-43 96-96l0-16 0-16 32 0 0 16 0 16c0 65.3-48.9 119.1-112 127l0 17 0 16-32 0 0-16 0-17c-63.1-7.9-112-61.7-112-127l0-16 0-16zM208 96l96 0 0 48-32 0-16 0 0 32 16 0 32 0 0 32-32 0-16 0 0 32 16 0 32 0 0 16c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-160z" />
        <path d="M208 96l96 0 0 48-32 0-16 0 0 32 16 0 32 0 0 32-32 0-16 0 0 32 16 0 32 0 0 16c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-160zM160 224l0 16 0 16c0 53 43 96 96 96s96-43 96-96l0-16 0-16 32 0 0 16 0 16c0 65.3-48.9 119.1-112 127l0 17 0 16-32 0 0-16 0-17c-63.1-7.9-112-61.7-112-127l0-16 0-16 32 0z" />
    </Icon>
);

export default CircleMicrophoneLines;