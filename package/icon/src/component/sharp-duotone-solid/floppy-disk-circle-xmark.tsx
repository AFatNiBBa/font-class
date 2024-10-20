
import { Icon, generic } from "../../index";

/**
 * A component that renders the `floppy-disk-circle-xmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/floppy-disk-circle-xmark?s=sharp-duotone-solid floppy-disk-circle-xmark}
 * @preview ![floppy-disk-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/floppy-disk-circle-xmark.svg)
 */
const FloppyDiskCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32l32 0 288 0 13.3 0 9.4 9.4 96 96 9.4 9.4 0 13.3 0 32.7c-5.3-.5-10.6-.7-16-.7c-75 0-139.1 47-164.4 113.1C256.1 294.5 240.8 288 224 288c-35.3 0-64 28.7-64 64s28.7 64 64 64c13.3 0 25.7-4.1 35.9-11c6 28.1 18.7 53.7 36.3 75L32 480 0 480l0-32L0 64 0 32zM64 96l0 128 256 0 0-128L64 96z" />
        <path d="M288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm214.6-48L480 297.4l-11.3 11.3L432 345.4l-36.7-36.7L384 297.4 361.4 320l11.3 11.3L409.4 368l-36.7 36.7L361.4 416 384 438.6l11.3-11.3L432 390.6l36.7 36.7L480 438.6 502.6 416l-11.3-11.3L454.6 368l36.7-36.7L502.6 320z" />
    </Icon>
);

export default FloppyDiskCircleXmark;