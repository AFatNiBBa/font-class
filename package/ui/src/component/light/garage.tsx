
import { Icon } from "../../index";

/**
 * A component that renders the `garage` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/garage?s=light garage}
 * @preview ![garage](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/garage.svg)
 */
const Garage: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M326.2 36c-4-1.7-8.4-1.7-12.4 0L51.6 146.4C39.7 151.4 32 163 32 175.9L32 496c0 8.8-7.2 16-16 16s-16-7.2-16-16L0 175.9c0-25.8 15.4-49 39.2-59L301.4 6.5c11.9-5 25.3-5 37.3 0L600.8 116.9c23.7 10 39.2 33.2 39.2 59L640 496c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-320.1c0-12.9-7.7-24.5-19.6-29.5L326.2 36zM96 224c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32l0 272c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-144-384 0 0 144c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-272zm32 96l384 0 0-96-384 0 0 96zm144 96l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default Garage;