
import { Icon } from "../../index";

/**
 * A component that renders the `utility-pole` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/utility-pole?s=solid utility-pole}
 * @preview ![utility-pole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/utility-pole.svg)
 */
const UtilityPole: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0c17.7 0 32 14.3 32 32l0 32 96 0 0-8c0-13.3 10.7-24 24-24s24 10.7 24 24l0 8 32 0 0-8c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40c0 17.7-14.3 32-32 32l-51.2 0L288 221.9l0 66.1 0 192c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192 0-66.1L83.2 128 32 128C14.3 128 0 113.7 0 96L0 56C0 42.7 10.7 32 24 32s24 10.7 24 24l0 8 32 0 0-8c0-13.3 10.7-24 24-24s24 10.7 24 24l0 8 96 0 0-32c0-17.7 14.3-32 32-32zM140.8 128L224 183.4l0-55.4-83.2 0zM288 183.4L371.2 128 288 128l0 55.4z" />
    </Icon>
);

export default UtilityPole;