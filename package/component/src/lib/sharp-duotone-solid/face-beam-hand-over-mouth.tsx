
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-beam-hand-over-mouth` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-beam-hand-over-mouth?s=sharp-duotone-solid face-beam-hand-over-mouth}
 * @preview ![face-beam-hand-over-mouth](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-beam-hand-over-mouth.svg)
 */
const FaceBeamHandOverMouth: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0 94.5 51.2 177 127.3 221.4c-9.8-18-15.3-38.6-15.3-60.5l0-82.4 0-32 32 0 40 0 21.7 0 51.7-51.7L280 228.1l22.6 22.6 9.4 9.4 16-16 22.6 22.6 22.6 22.6L395.9 312l-16 16 9.4 9.4L411.9 360l-22.6 22.6-9.4 9.4 9.4 9.4L411.9 424l-22.6 22.6-52.3 52.3C438.7 465.1 512 369.1 512 256C512 114.6 397.4 0 256 0S0 114.6 0 256zm120-56c0-40 28-80 56-80s56 40 56 80c0 0-28-32-56-32s-56 32-56 32zm160 0c0-40 28-80 56-80s56 40 56 80c0 0-28-32-56-32s-56 32-56 32z" />
        <path d="M176 120c28 0 56 40 56 80c0 0-28-32-56-32s-56 32-56 32c0-40 28-80 56-80zm160 0c28 0 56 40 56 80c0 0-28-32-56-32s-56 32-56 32c0-40 28-80 56-80zM302.6 296l-11.3 11.3-56 56 9.4 9.4 72-72L328 289.4 350.6 312l-11.3 11.3-72 72 9.4 9.4 56-56L344 337.4 366.6 360l-11.3 11.3-56 56 9.4 9.4 24-24L344 401.4 366.6 424l-11.3 11.3-48.8 48.8C288.7 502 264.4 512 239.2 512c-52.6 0-95.2-42.6-95.2-95.2l0-12.8 0-20 0-29.6 0-20 40 0 0 20 0 15 84.7-84.7L280 273.4 302.6 296z" />
    </Icon>
);

export default FaceBeamHandOverMouth;