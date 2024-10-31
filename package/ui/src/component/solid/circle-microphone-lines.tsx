
import { Icon } from "../../index";

/**
 * A component that renders the `circle-microphone-lines` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-microphone-lines?s=solid circle-microphone-lines}
 * @preview ![circle-microphone-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-microphone-lines.svg)
 */
const CircleMicrophoneLines: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM256 96c-26.5 0-48 21.5-48 48l0 112c0 26.5 21.5 48 48 48s48-21.5 48-48l0-16-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l32 0 0-32-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l32 0c0-26.5-21.5-48-48-48zM160 240c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 16c0 65.3 48.9 119.1 112 127l0 17c0 8.8 7.2 16 16 16s16-7.2 16-16l0-17c63.1-7.9 112-61.7 112-127l0-16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 16c0 53-43 96-96 96s-96-43-96-96l0-16z" />
    </Icon>
);

export default CircleMicrophoneLines;