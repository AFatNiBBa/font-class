
import { Icon } from "../../index";

/**
 * A component that renders the `vr-cardboard` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vr-cardboard?s=solid vr-cardboard}
 * @preview ![vr-cardboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/vr-cardboard.svg)
 */
const VrCardboard: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M576 64L64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l120.4 0c24.2 0 46.4-13.7 57.2-35.4l32-64c8.8-17.5 26.7-28.6 46.3-28.6s37.5 11.1 46.3 28.6l32 64c10.8 21.7 33 35.4 57.2 35.4L576 448c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64zM96 240a64 64 0 1 1 128 0A64 64 0 1 1 96 240zm384-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default VrCardboard;