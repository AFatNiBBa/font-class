
import { Icon, generic } from "../../index";

/**
 * A component that renders the `utility-pole` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/utility-pole?s=duotone utility-pole}
 * @preview ![utility-pole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/utility-pole.svg)
 */
const UtilityPole: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 56C0 42.7 10.7 32 24 32s24 10.7 24 24l0 8L0 64l0-8zm80 0c0-13.3 10.7-24 24-24s24 10.7 24 24l0 8L80 64l0-8zm3.2 72l57.7 0L224 183.4l0 38.5L83.2 128zM288 183.4L371.2 128l57.7 0L288 221.9l0-38.5zM384 56c0-13.3 10.7-24 24-24s24 10.7 24 24l0 8-48 0 0-8zm80 0c0-13.3 10.7-24 24-24s24 10.7 24 24l0 8-48 0 0-8z" />
        <path d="M256 0c17.7 0 32 14.3 32 32l0 32 224 0 0 32c0 17.7-14.3 32-32 32l-192 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352L32 128C14.3 128 0 113.7 0 96L0 64l224 0 0-32c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default UtilityPole;