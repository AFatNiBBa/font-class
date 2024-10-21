
import { Icon } from "../../index";

/**
 * A component that renders the `circle-v` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-v?s=solid circle-v}
 * @preview ![circle-v](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-v.svg)
 */
const CircleV: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM173.5 157.3L256 322.3l82.5-165.1c5.9-11.9 20.3-16.7 32.2-10.7s16.7 20.3 10.7 32.2l-104 208c-4.1 8.1-12.4 13.3-21.5 13.3s-17.4-5.1-21.5-13.3l-104-208c-5.9-11.9-1.1-26.3 10.7-32.2s26.3-1.1 32.2 10.7z" />
    </Icon>
);

export default CircleV;