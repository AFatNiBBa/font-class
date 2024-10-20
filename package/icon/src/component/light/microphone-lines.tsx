
import { Icon } from "../../index";

/**
 * A component that renders the `microphone-lines` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microphone-lines?s=light microphone-lines}
 * @preview ![microphone-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/microphone-lines.svg)
 */
const MicrophoneLines: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M256 160l0-32-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 160c0 35.3 28.7 64 64 64s64-28.7 64-64l-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0 0-32-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0zm32 16l0 64 0 16c0 53-43 96-96 96s-96-43-96-96L96 96c0-53 43-96 96-96s96 43 96 96l0 16 0 64zM48 192c8.8 0 16 7.2 16 16l0 48c0 70.7 57.3 128 128 128s128-57.3 128-128l0-48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48c0 83-63.1 151.2-144 159.2l0 64.8 64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-80 0-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l64 0 0-64.8C95.1 407.2 32 339 32 256l0-48c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default MicrophoneLines;