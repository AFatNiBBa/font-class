
import { Icon } from "../../index";

/**
 * A component that renders the `computer-speaker` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer-speaker?s=sharp-solid computer-speaker}
 * @preview ![computer-speaker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/computer-speaker.svg)
 */
const ComputerSpeaker: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M288 480l0-64-160 0-32 0 0 64 32 0 160 0zM64 32L0 32 0 96 0 320l0 64 64 0 224 0 0-64L64 320 64 96l224 0 0-64L64 32zm576 0L320 32l0 448 320 0 0-448zM544 320a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-160 0a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm64-192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default ComputerSpeaker;