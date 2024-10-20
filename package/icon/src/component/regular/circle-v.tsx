
import { Icon } from "../../index";

/**
 * A component that renders the `circle-v` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-v?s=regular circle-v}
 * @preview ![circle-v](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-v.svg)
 */
const CircleV: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM173.5 157.3c-5.9-11.9-20.3-16.7-32.2-10.7s-16.7 20.3-10.7 32.2l104 208c4.1 8.1 12.4 13.3 21.5 13.3s17.4-5.1 21.5-13.3l104-208c5.9-11.9 1.1-26.3-10.7-32.2s-26.3-1.1-32.2 10.7L256 322.3 173.5 157.3z" />
    </Icon>
);

export default CircleV;