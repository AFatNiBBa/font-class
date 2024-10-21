
import { Icon, generic } from "../../index";

/**
 * A component that renders the `claw-marks` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/claw-marks?s=duotone claw-marks}
 * @preview ![claw-marks](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/claw-marks.svg)
 */
const ClawMarks: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3L96 333.3 96 416c0 17.7 14.3 32 32 32l82.7 0 54.6 54.6c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3l-64-64-96-96-64-64c-12.5-12.5-32.8-12.5-45.3 0zm224-224c-12.5 12.5-12.5 32.8 0 45.3L288 77.3l0 50.7c0 17.7 14.3 32 32 32l50.7 0L416 205.3l0 50.7c0 17.7 14.3 32 32 32l50.7 0 22.6 22.6c12.5 12.5 32.8 12.5 45.3 0c6.2-6.2 9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6l-32-32-64-64-64-64-64-64-32-32C304.4 3.1 296.2 0 288 0s-16.4 3.1-22.6 9.4z" />
        <path d="M41.4 9.4C53.9-3.1 74.1-3.1 86.6 9.4l96 96 64 64 160 160 64 64 64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L434.7 448 384 448c-17.7 0-32-14.3-32-32l0-50.7L210.7 224 160 224c-17.7 0-32-14.3-32-32l0-50.7L41.4 54.6c-12.5-12.5-12.5-32.8 0-45.3z" />
    </Icon>
);

export default ClawMarks;