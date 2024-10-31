
import { Icon } from "../../index";

/**
 * A component that renders the `circle-microphone-lines` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-microphone-lines?s=sharp-thin circle-microphone-lines}
 * @preview ![circle-microphone-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-microphone-lines.svg)
 */
const CircleMicrophoneLines: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM200 96l112 0 8 0 0 8 0 152c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-152 0-8 8 0zm8 160c0 26.5 21.5 48 48 48s48-21.5 48-48l0-16-40 0-8 0 0-16 8 0 40 0 0-48-40 0-8 0 0-16 8 0 40 0 0-48-96 0 0 144zm-64-32l0 8 0 24c0 61.9 50.1 112 112 112s112-50.1 112-112l0-24 0-8 16 0 0 8 0 24c0 68-53 123.6-120 127.8l0 24.2 0 8-16 0 0-8 0-24.2C181 379.6 128 324 128 256l0-24 0-8 16 0z" />
    </Icon>
);

export default CircleMicrophoneLines;