
import { Icon } from "../../index";

/**
 * A component that renders the `circle-up` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-up?s=sharp-regular circle-up}
 * @preview ![circle-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-up.svg)
 */
const CircleUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM144 224l0 32 64 0 0 128 96 0 0-128 64 0 0-32L256 128 144 224z" />
    </Icon>
);

export default CircleUp;