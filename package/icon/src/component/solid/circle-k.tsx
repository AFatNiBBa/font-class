
import { Icon } from "../../index";

/**
 * A component that renders the `circle-k` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-k?s=solid circle-k}
 * @preview ![circle-k](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-k.svg)
 */
const CircleK: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm89.1-343.2l-73.1 74.3 75.3 102.7c7.8 10.7 5.5 25.7-5.2 33.5s-25.7 5.5-33.5-5.2L238 277.8l-30 30.5 0 51.7c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-61.5L160 152c0-13.3 10.7-24 24-24s24 10.7 24 24l0 87.8L310.9 135.2c9.3-9.5 24.5-9.6 33.9-.3s9.6 24.5 .3 33.9z" />
    </Icon>
);

export default CircleK;