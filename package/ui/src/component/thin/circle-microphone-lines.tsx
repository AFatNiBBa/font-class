
import { Icon } from "../../index";

/**
 * A component that renders the `circle-microphone-lines` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-microphone-lines?s=thin circle-microphone-lines}
 * @preview ![circle-microphone-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-microphone-lines.svg)
 */
const CircleMicrophoneLines: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM256 96c35.3 0 64 28.7 64 64l0 96c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-96c0-35.3 28.7-64 64-64zm-48 64l0 96c0 26.5 21.5 48 48 48s48-21.5 48-48l0-16-40 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l40 0 0-48-40 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l40 0c0-26.5-21.5-48-48-48s-48 21.5-48 48zm-72 64c4.4 0 8 3.6 8 8l0 24c0 61.9 50.1 112 112 112s112-50.1 112-112l0-24c0-4.4 3.6-8 8-8s8 3.6 8 8l0 24c0 68-53 123.6-120 127.8l0 24.2c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-24.2C181 379.6 128 324 128 256l0-24c0-4.4 3.6-8 8-8z" />
    </Icon>
);

export default CircleMicrophoneLines;