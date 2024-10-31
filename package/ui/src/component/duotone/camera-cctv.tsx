
import { Icon, generic } from "../../index";

/**
 * A component that renders the `camera-cctv` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-cctv?s=duotone camera-cctv}
 * @preview ![camera-cctv](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/camera-cctv.svg)
 */
const CameraCctv: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 384l0 48 0 48c0 17.7 14.3 32 32 32s32-14.3 32-32l0-16 96 0c13.3 0 25.2-8.2 29.9-20.6l47-123.4c-19.7-8.2-39.4-16.4-59.1-24.6L137.9 400 64 400l0-16c0-17.7-14.3-32-32-32s-32 14.3-32 32zm362.6-54l150.8 68.5c3.9 1.8 8.4 1.9 12.5 .3s7.2-4.7 8.9-8.7l40-96c.8-2 1.2-4.1 1.2-6.1c0-6.1-3.6-12-9.5-14.6l-71.3-31.7C451 271.1 406.8 300.6 362.6 330z" />
        <path d="M140.3 2.5c-14.9-6.2-32.1-.3-40.1 13.7l-96 168c-4.6 8-5.5 17.5-2.5 26.2s9.5 15.7 18 19.2l288 120c9.9 4.1 21.2 3 30.1-2.9l192-128c9.8-6.5 15.2-18 14.1-29.7s-8.6-21.9-19.5-26.5l-384-160z" />
    </Icon>
);

export default CameraCctv;