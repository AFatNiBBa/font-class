
import { Icon } from "../../index";

/**
 * A component that renders the `circle-sterling` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-sterling?s=sharp-light circle-sterling}
 * @preview ![circle-sterling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-sterling.svg)
 */
const CircleSterling: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM259.6 144c-20.2 0-36.5 16.5-36.4 36.7l.3 43.3 48.5 0 16 0 0 32-16 0-48.2 0 .2 33.3 0 5-2.8 4.1L206.4 320 328 320l16 0 0 32-16 0-152 0-30.4 0 17.2-25.1L192 284.5l-.2-28.5L176 256l-16 0 0-32 16 0 15.5 0-.3-43.1c-.3-38 30.4-68.9 68.4-68.9c10.6 0 21.1 2.5 30.6 7.2l20.9 10.5 14.3 7.2-14.3 28.6-14.3-7.2-20.9-10.5c-5.1-2.5-10.6-3.8-16.3-3.8z" />
    </Icon>
);

export default CircleSterling;