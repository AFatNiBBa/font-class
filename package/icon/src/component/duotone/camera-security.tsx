
import { Icon, generic } from "../../index";

/**
 * A component that renders the `camera-security` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-security?s=duotone camera-security}
 * @preview ![camera-security](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/camera-security.svg)
 */
const CameraSecurity: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M128 208a96 96 0 1 0 192 0 96 96 0 1 0 -192 0z" />
        <path d="M0 64C0 28.7 28.7 0 64 0L384 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-74 0 59 36.9c12.1 7.6 17.7 22.2 13.8 36S366.3 512 352 512L96 512c-14.3 0-26.8-9.5-30.8-23.2s1.7-28.4 13.8-36L138 416l-74 0c-35.3 0-64-28.7-64-64L0 64zM224 336a128 128 0 1 0 0-256 128 128 0 1 0 0 256z" />
    </Icon>
);

export default CameraSecurity;