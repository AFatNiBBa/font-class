
import { Icon } from "../../index";

/**
 * A component that renders the `circle-right` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-right?s=light circle-right}
 * @preview ![circle-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-right.svg)
 */
const CircleRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 1 32 256a224 224 0 1 1 448 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm400 0c0-9.2-3.5-18-9.7-24.7l-84-91c-7.2-7.8-17.4-12.3-28.1-12.3c-21.1 0-38.3 17.1-38.3 38.3l0 25.7-80 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l80 0 0 25.7c0 21.1 17.1 38.3 38.3 38.3c10.7 0 20.9-4.5 28.1-12.3l84-91c6.2-6.7 9.7-15.6 9.7-24.7zm-33.2-3c.8 .8 1.2 1.9 1.2 3s-.4 2.2-1.2 3l-84 91c-1.2 1.3-2.9 2-4.6 2c-3.5 0-6.3-2.8-6.3-6.3l0-41.7c0-8.8-7.2-16-16-16l-96 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l96 0c8.8 0 16-7.2 16-16l0-41.7c0-3.5 2.8-6.3 6.3-6.3c1.7 0 3.4 .7 4.6 2l84 91z" />
    </Icon>
);

export default CircleRight;