
import { Icon, generic } from "../../index";

/**
 * A component that renders the `computer-speaker` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer-speaker?s=duotone computer-speaker}
 * @preview ![computer-speaker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/computer-speaker.svg)
 */
const ComputerSpeaker: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 320c0 35.3 28.7 64 64 64l224 0 0-64L64 320 64 96l224 0 0-16c0-18 6-34.6 16-48L64 32C28.7 32 0 60.7 0 96zM96 448c0 17.7 14.3 32 32 32l176 0c-10-13.4-16-30-16-48l0-16-160 0c-17.7 0-32 14.3-32 32zM320 80l0 352c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L368 32c-26.5 0-48 21.5-48 48zM576 320a96 96 0 1 1 -192 0 96 96 0 1 1 192 0zM512 128a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M64 96l224 0 0 224L64 320 64 96zm384 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm80 192a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-144 0a96 96 0 1 1 192 0 96 96 0 1 1 -192 0z" />
    </Icon>
);

export default ComputerSpeaker;