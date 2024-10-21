
import { Icon } from "../../index";

/**
 * A component that renders the `circle-exclamation-check` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-exclamation-check?s=sharp-light circle-exclamation-check}
 * @preview ![circle-exclamation-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-exclamation-check.svg)
 */
const CircleExclamationCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 256C32 132.3 132.3 32 256 32c95.3 0 176.7 59.5 209.1 143.4l29.9-11.5C458 68 364.9 0 256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c75.8 0 144-33 190.8-85.3L423 405.3c-41 45.9-100.6 74.7-167 74.7C132.3 480 32 379.7 32 256zM272 144l0-16-32 0 0 16 0 128 0 16 32 0 0-16 0-128zm8 224l0-48-48 0 0 48 48 0zM630.6 192L608 169.4l-11.3 11.3L480 297.4l-52.7-52.7L416 233.4 393.4 256l11.3 11.3 64 64L480 342.6l11.3-11.3 128-128L630.6 192z" />
    </Icon>
);

export default CircleExclamationCheck;