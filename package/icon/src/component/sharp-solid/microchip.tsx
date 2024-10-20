
import { Icon } from "../../index";

/**
 * A component that renders the `microchip` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microchip?s=sharp-solid microchip}
 * @preview ![microchip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/microchip.svg)
 */
const Microchip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 24l0-24L128 0l0 24 0 40L64 64l0 64-40 0L0 128l0 48 24 0 40 0 0 56-40 0L0 232l0 48 24 0 40 0 0 56-40 0L0 336l0 48 24 0 40 0 0 64 64 0 0 40 0 24 48 0 0-24 0-40 56 0 0 40 0 24 48 0 0-24 0-40 56 0 0 40 0 24 48 0 0-24 0-40 64 0 0-64 40 0 24 0 0-48-24 0-40 0 0-56 40 0 24 0 0-48-24 0-40 0 0-56 40 0 24 0 0-48-24 0-40 0 0-64-64 0 0-40 0-24L336 0l0 24 0 40-56 0 0-40 0-24L232 0l0 24 0 40-56 0 0-40zM352 160l-192 0 0 192 192 0 0-192zM160 128l192 0 32 0 0 32 0 192 0 32-32 0-192 0-32 0 0-32 0-192 0-32 32 0z" />
    </Icon>
);

export default Microchip;