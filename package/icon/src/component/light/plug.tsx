
import { Icon } from "../../index";

/**
 * A component that renders the `plug` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plug?s=light plug}
 * @preview ![plug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/plug.svg)
 */
const Plug: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M128 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 96 32 0 0-96zm160 0c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 96 32 0 0-96zM16 144c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 0 64c0 83 63.1 151.2 144 159.2l0 96.8c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96.8c80.9-8 144-76.2 144-159.2l0-64 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0-32 0L64 144l-32 0-16 0zM192 368c-70.7 0-128-57.3-128-128l0-64 256 0 0 64c0 70.7-57.3 128-128 128z" />
    </Icon>
);

export default Plug;