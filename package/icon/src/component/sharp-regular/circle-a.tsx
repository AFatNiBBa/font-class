
import { Icon } from "../../index";

/**
 * A component that renders the `circle-a` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-a?s=sharp-regular circle-a}
 * @preview ![circle-a](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-a.svg)
 */
const CircleA: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM240.8 112l-6.5 13.8L120.6 368l53 0 22.5-48 119.7 0 22.5 48 53 0L277.7 125.8 271.2 112l-30.5 0zM256 192.5L293.3 272l-74.6 0L256 192.5z" />
    </Icon>
);

export default CircleA;