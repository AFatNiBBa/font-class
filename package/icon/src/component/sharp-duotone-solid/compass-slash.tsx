
import { Icon, generic } from "../../index";

/**
 * A component that renders the `compass-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compass-slash?s=sharp-duotone-solid compass-slash}
 * @preview ![compass-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/compass-slash.svg)
 */
const CompassSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 256c0-33.6 6.5-65.8 18.3-95.2L228.1 275.7 192 384l121.9-40.6L468.1 464.8C426.3 494.5 375.2 512 320 512C178.6 512 64 397.4 64 256zM133.4 80.8C180.1 31.1 246.4 0 320 0C461.4 0 576 114.6 576 256c0 50.6-14.7 97.7-40 137.4L395.8 284.5 448 128 270.4 187.2c-45.7-35.5-91.4-70.9-137.1-106.4z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default CompassSlash;