
import { Icon } from "../../index";

/**
 * A component that renders the `circle-6` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-6?s=light circle-6}
 * @preview ![circle-6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-6.svg)
 */
const Circle_6: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm43.7-378.9c-6-6.5-16.1-6.9-22.6-.8l-82.7 76.8c-22 20.4-34.4 49-34.4 78.9c0 53 43 96 96 96s96-43 96-96c0-51.8-41-94-92.3-95.9l39.1-36.3c6.5-6 6.9-16.1 .8-22.6zM256 224a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default Circle_6;