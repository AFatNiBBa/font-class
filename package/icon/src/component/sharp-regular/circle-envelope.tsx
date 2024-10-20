
import { Icon } from "../../index";

/**
 * A component that renders the `circle-envelope` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-envelope?s=sharp-regular circle-envelope}
 * @preview ![circle-envelope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-envelope.svg)
 */
const CircleEnvelope: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM128 188.2l128 67.2 128-67.2 0-28.2-256 0 0 28.2zm135.4 99.5l-7.4 3.9-7.4-3.9L128 224.3 128 352l256 0 0-127.7L263.4 287.6z" />
    </Icon>
);

export default CircleEnvelope;