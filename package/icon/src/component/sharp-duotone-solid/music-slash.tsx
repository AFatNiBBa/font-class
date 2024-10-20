
import { Icon, generic } from "../../index";

/**
 * A component that renders the `music-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/music-slash?s=sharp-duotone-solid music-slash}
 * @preview ![music-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/music-slash.svg)
 */
const MusicSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 432c0 44.2 43 80 96 80s96-35.8 96-80l0-134.3-64-50.4 0 109.3c-10-2.9-20.8-4.6-32-4.6c-53 0-96 35.8-96 80zM192 120.2l0 6.1L315.3 222 512 163l0 129.5c-10-2.9-20.8-4.6-32-4.6c-22 0-42.2 6.2-58.4 16.5L560.1 412.1c10-12.6 15.9-27.8 15.9-44.1l0-248 0-72 0-43L534.8 17.4l-320 96L192 120.2z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L18.9 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default MusicSlash;