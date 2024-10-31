
import { Icon } from "../../index";

/**
 * A component that renders the `truck-droplet` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-droplet?s=solid truck-droplet}
 * @preview ![truck-droplet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/truck-droplet.svg)
 */
const TruckDroplet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 48C0 21.5 21.5 0 48 0L368 0c26.5 0 48 21.5 48 48l0 48 50.7 0c17 0 33.3 6.7 45.3 18.7L589.3 192c12 12 18.7 28.3 18.7 45.3l0 18.7 0 32 0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c0 53-43 96-96 96s-96-43-96-96l-128 0c0 53-43 96-96 96s-96-43-96-96l-16 0c-26.5 0-48-21.5-48-48L0 48zM416 256l128 0 0-18.7L466.7 160 416 160l0 96zM160 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm368-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM208 272c39.8 0 72-29.6 72-66c0-27-39.4-82.9-59.9-110.3c-6.1-8.2-18.1-8.2-24.2 0C175.4 123 136 179 136 206c0 36.5 32.2 66 72 66z" />
    </Icon>
);

export default TruckDroplet;