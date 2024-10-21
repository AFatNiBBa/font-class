
import { Icon } from "../../index";

/**
 * A component that renders the `computer-speaker` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer-speaker?s=light computer-speaker}
 * @preview ![computer-speaker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/computer-speaker.svg)
 */
const ComputerSpeaker: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 384c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32l229.5 0c4.2-11.9 10.7-22.8 19-32L64 32C28.7 32 0 60.7 0 96L0 352c0 35.3 28.7 64 64 64l224 0 0-32L64 384zm48 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l200.4 0c-8.3-9.2-14.8-20.1-19-32L112 448zM576 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-320c0-17.7 14.3-32 32-32l192 0zM384 32c-35.3 0-64 28.7-64 64l0 320c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L384 32zm96 352a64 64 0 1 1 0-128 64 64 0 1 1 0 128zm-96-64a96 96 0 1 0 192 0 96 96 0 1 0 -192 0zM496 144a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM480 96a48 48 0 1 0 0 96 48 48 0 1 0 0-96zm24 224a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default ComputerSpeaker;