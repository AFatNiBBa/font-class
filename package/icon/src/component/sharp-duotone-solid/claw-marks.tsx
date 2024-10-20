
import { Icon, generic } from "../../index";

/**
 * A component that renders the `claw-marks` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/claw-marks?s=sharp-duotone-solid claw-marks}
 * @preview ![claw-marks](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/claw-marks.svg)
 */
const ClawMarks: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M33.4 270.6l45.3-45.3 72 72 96 96 72 72-45.3 45.3L210.7 448 128 448l-32 0 0-32 0-82.7L33.4 270.6zm224-224L302.6 1.4l40 40 64 64 64 64 64 64 40 40-45.3 45.3L498.7 288 448 288l-32 0 0-32 0-50.7L370.7 160 320 160l-32 0 0-32 0-50.7L257.4 46.6z" />
        <path d="M128 141.3L33.4 46.6 78.6 1.4l104 104 64 64 160 160 64 64 72 72-45.3 45.3L434.7 448 384 448l-32 0 0-32 0-50.7L210.7 224 160 224l-32 0 0-32 0-50.7z" />
    </Icon>
);

export default ClawMarks;