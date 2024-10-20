
import { Icon } from "../../index";

/**
 * A component that renders the `circle-9` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-9?s=solid circle-9}
 * @preview ![circle-9](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-9.svg)
 */
const Circle_9: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a48 48 0 1 1 0-96 48 48 0 1 1 0 96zm-26 44.4l-29.6 25.4c-10.1 8.6-11.2 23.8-2.6 33.8s23.8 11.2 33.8 2.6l81.6-70C337.8 287.2 352 256.4 352 224c0-53-43-96-96-96s-96 43-96 96c0 44 29.6 81.1 70 92.4z" />
    </Icon>
);

export default Circle_9;