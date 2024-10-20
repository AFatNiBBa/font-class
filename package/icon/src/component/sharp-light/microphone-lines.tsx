
import { Icon } from "../../index";

/**
 * A component that renders the `microphone-lines` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microphone-lines?s=sharp-light microphone-lines}
 * @preview ![microphone-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/microphone-lines.svg)
 */
const MicrophoneLines: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M256 32L128 32l0 224c0 35.3 28.7 64 64 64s64-28.7 64-64l-48 0-16 0 0-32 16 0 48 0 0-32-48 0-16 0 0-32 16 0 48 0 0-32-48 0-16 0 0-32 16 0 48 0 0-64zm32 64l0 32 0 32 0 32 0 32 0 32c0 53-43 96-96 96s-96-43-96-96L96 32 96 0l32 0L256 0l32 0 0 32 0 64zM64 192l0 16 0 48c0 70.7 57.3 128 128 128s128-57.3 128-128l0-48 0-16 32 0 0 16 0 48c0 83-63.1 151.2-144 159.2l0 64.8 64 0 16 0 0 32-16 0-80 0-80 0-16 0 0-32 16 0 64 0 0-64.8C95.1 407.2 32 339 32 256l0-48 0-16 32 0z" />
    </Icon>
);

export default MicrophoneLines;