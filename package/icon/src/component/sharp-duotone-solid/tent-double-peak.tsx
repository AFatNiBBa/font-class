
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tent-double-peak` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tent-double-peak?s=sharp-duotone-solid tent-double-peak}
 * @preview ![tent-double-peak](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tent-double-peak.svg)
 */
const TentDoublePeak: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 192l576 0 0 320-160 0L288 288l0 224L0 512 0 192z" />
        <path d="M7.9 142.7L0 146.9 0 192l576 0 0-45.1-7.9-4.2C510.3 112.1 461.3 67.2 425.8 12.3L417.8 0l-8.5 9.5C378.5 44.2 334.4 64 288 64s-90.5-19.8-121.3-54.5L158.2 0l-8 12.3C114.7 67.2 65.7 112.1 7.9 142.7zM288 512l128 0L288 288l0 224z" />
    </Icon>
);

export default TentDoublePeak;