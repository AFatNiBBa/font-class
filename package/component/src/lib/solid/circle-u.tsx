
import { Icon } from "../../index";

/**
 * A component that renders the `circle-u` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-u?s=solid circle-u}
 * @preview ![circle-u](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-u.svg)
 */
const CircleU: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM192 168l0 120c0 35.3 28.7 64 64 64s64-28.7 64-64l0-120c0-13.3 10.7-24 24-24s24 10.7 24 24l0 120c0 61.9-50.1 112-112 112s-112-50.1-112-112l0-120c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
    </Icon>
);

export default CircleU;