
import { Icon } from "../../index";

/**
 * A component that renders the `flashlight` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flashlight?s=sharp-light flashlight}
 * @preview ![flashlight](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/flashlight.svg)
 */
const Flashlight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M401.8 325.4l-8.1-5.4-9.7 0L32 320l0-128 352 0 9.7 0 8.1-5.4 31.5-21c24-16 50.8-27.1 78.7-32.9l0 246.7c-28-5.8-54.7-16.9-78.7-32.9l-31.5-21zM544 383.6l0-255.2c4.5-.3 9-.4 13.5-.4l50.5 0 0 256-50.5 0c-4.5 0-9-.1-13.5-.4zM0 352l32 0 352 0 31.5 21c42.1 28 91.5 43 142 43l50.5 0 32 0 0-32 0-256 0-32-32 0-50.5 0c-50.5 0-100 15-142 43L384 160 32 160 0 160l0 32L0 320l0 32zM224 240l0 32 16 0 64 0 16 0 0-32-16 0-64 0-16 0z" />
    </Icon>
);

export default Flashlight;