
import { Icon, generic } from "../../index";

/**
 * A component that renders the `camera-viewfinder` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-viewfinder?s=duotone camera-viewfinder}
 * @preview ![camera-viewfinder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/camera-viewfinder.svg)
 */
const CameraViewfinder: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 24L0 136c0 13.3 10.7 24 24 24s24-10.7 24-24l0-88 88 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 0C10.7 0 0 10.7 0 24zM0 376L0 488c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-88 0 0-88c0-13.3-10.7-24-24-24s-24 10.7-24 24zM352 24c0 13.3 10.7 24 24 24l88 0 0 88c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24L376 0c-13.3 0-24 10.7-24 24zm0 464c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 88-88 0c-13.3 0-24 10.7-24 24z" />
        <path d="M186.2 111.6L180 128l-36 0c-26.5 0-48 21.5-48 48l0 160c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-160c0-26.5-21.5-48-48-48l-36 0-6.2-16.4c-3.5-9.4-12.5-15.6-22.5-15.6l-94.7 0c-10 0-19 6.2-22.5 15.6zM256 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default CameraViewfinder;