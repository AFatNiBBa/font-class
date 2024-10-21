
import { Icon } from "../../index";

/**
 * A component that renders the `circle-9` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-9?s=light circle-9}
 * @preview ![circle-9](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-9.svg)
 */
const Circle_9: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a64 64 0 1 0 0 128 64 64 0 1 0 0-128zm-3.7 159.9C201 318 160 275.8 160 224c0-53 43-96 96-96s96 43 96 96c0 30-12.5 58.6-34.4 78.9l-82.7 76.8c-6.5 6-16.6 5.6-22.6-.8s-5.6-16.6 .8-22.6l39.1-36.3z" />
    </Icon>
);

export default Circle_9;