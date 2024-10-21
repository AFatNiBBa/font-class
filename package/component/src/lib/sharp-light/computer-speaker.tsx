
import { Icon } from "../../index";

/**
 * A component that renders the `computer-speaker` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer-speaker?s=sharp-light computer-speaker}
 * @preview ![computer-speaker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/computer-speaker.svg)
 */
const ComputerSpeaker: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 32L0 32 0 64 0 384l0 32 32 0 256 0 0-32L32 384 32 64l256 0 0-32L32 32zm80 416l-16 0 0 32 16 0 176 0 0-32-176 0zM608 64l0 384-256 0 0-384 256 0zM352 32l-32 0 0 32 0 384 0 32 32 0 256 0 32 0 0-32 0-384 0-32-32 0L352 32zM480 384a64 64 0 1 1 0-128 64 64 0 1 1 0 128zm-96-64a96 96 0 1 0 192 0 96 96 0 1 0 -192 0zM496 144a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM480 96a48 48 0 1 0 0 96 48 48 0 1 0 0-96zm24 224a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default ComputerSpeaker;