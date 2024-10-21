
import { Icon, generic } from "../../index";

/**
 * A component that renders the `drone-front` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/drone-front?s=sharp-duotone-solid drone-front}
 * @preview ![drone-front](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/drone-front.svg)
 */
const DroneFront: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 112l0 48 24 0 72 0 64 0 104 0 24 0 0-48-24 0-104 0-64 0-72 0L0 112zm352 0l0 48 24 0 104 0 64 0 72 0 24 0 0-48-24 0-72 0-64 0-104 0-24 0z" />
        <path d="M160 160l-64 0 0 32 0 64 0 20.8 19 8.4 56.5 25.1-21.9 26.3-5.6 6.7 0 8.7 0 40 0 24 48 0 0-24 0-31.3 25.1-30.1L259 349.2l6.2 2.8 6.8 0 96 0 6.8 0 6.2-2.8 41.9-18.6L448 360.7l0 31.3 0 24 48 0 0-24 0-40 0-8.7-5.6-6.7-21.9-26.3L525 285.2l19-8.4 0-20.8 0-64 0-32-64 0 0 32 0 43.2-17.8 7.9-40.6-23.7C390.7 201.5 355.7 192 320 192s-70.7 9.5-101.6 27.5l-40.6 23.7L160 235.2l0-43.2 0-32zm320-48l64 0 0-16-64 0 0 16zM160 96L96 96l0 16 64 0 0-16z" />
    </Icon>
);

export default DroneFront;