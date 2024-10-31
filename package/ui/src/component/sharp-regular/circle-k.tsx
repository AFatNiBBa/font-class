
import { Icon } from "../../index";

/**
 * A component that renders the `circle-k` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-k?s=sharp-regular circle-k}
 * @preview ![circle-k](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-k.svg)
 */
const CircleK: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369.1 128l-64.5 0-82.5 92L208 235.8l0-83.8 0-24-48 0 0 24 0 146.5 0 61.5 0 24 48 0 0-24 0-52.3 29.1-32.5L309.2 384l57.6 0-4.8-7.3L270.3 238.3l97.9-109.1 1-1.1z" />
    </Icon>
);

export default CircleK;