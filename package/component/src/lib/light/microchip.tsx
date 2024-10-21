
import { Icon } from "../../index";

/**
 * A component that renders the `microchip` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microchip?s=light microchip}
 * @preview ![microchip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/microchip.svg)
 */
const Microchip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48-16 0c-35.3 0-64 28.7-64 64l0 16-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 64-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 64-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 16c0 35.3 28.7 64 64 64l16 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 64 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 64 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 16 0c35.3 0 64-28.7 64-64l0-16 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-64 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-64 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-16c0-35.3-28.7-64-64-64l-16 0 0-48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48-64 0 0-48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48-64 0 0-48zM416 128l0 256c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32zm-256 0c-17.7 0-32 14.3-32 32l0 192c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32l-192 0zm192 32l0 192-192 0 0-192 192 0z" />
    </Icon>
);

export default Microchip;