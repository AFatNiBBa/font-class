
import { Icon } from "../../index";

/**
 * A component that renders the `mars-and-venus` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mars-and-venus?s=light mars-and-venus}
 * @preview ![mars-and-venus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/mars-and-venus.svg)
 */
const MarsAndVenus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 16c0 8.8 7.2 16 16 16l73.4 0-75.6 75.6C337.1 80.6 298.5 64 256 64C167.6 64 96 135.6 96 224c0 83 63.1 151.2 144 159.2l0 32.8-32 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-32.8c80.9-8 144-76.2 144-159.2c0-34.3-10.8-66.1-29.2-92.2L464 54.6l0 73.4c0 8.8 7.2 16 16 16s16-7.2 16-16l0-112c0-8.8-7.2-16-16-16L368 0c-8.8 0-16 7.2-16 16zM256 96a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
    </Icon>
);

export default MarsAndVenus;