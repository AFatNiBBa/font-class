
import { Icon } from "../../index";

/**
 * A component that renders the `circle-yen` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-yen?s=light circle-yen}
 * @preview ![circle-yen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-yen.svg)
 */
const CircleYen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM165.2 148.2c6.5-5.9 16.7-5.5 22.6 1.1l68.2 75 68.2-75c5.9-6.5 16.1-7 22.6-1.1s7 16.1 1.1 22.6L271 255.2l1 0 0 .8 48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0 0 32 48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0 0 17c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-17-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0 0-32-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0 0-.8 1 0-76.8-84.5c-5.9-6.5-5.5-16.7 1.1-22.6z" />
    </Icon>
);

export default CircleYen;