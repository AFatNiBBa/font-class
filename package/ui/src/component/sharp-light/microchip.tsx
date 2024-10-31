
import { Icon } from "../../index";

/**
 * A component that renders the `microchip` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microchip?s=sharp-light microchip}
 * @preview ![microchip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/microchip.svg)
 */
const Microchip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 16l0-16L144 0l0 16 0 48L96 64 64 64l0 32 0 48-48 0L0 144l0 32 16 0 48 0 0 64-48 0L0 240l0 32 16 0 48 0 0 64-48 0L0 336l0 32 16 0 48 0 0 48 0 32 32 0 48 0 0 48 0 16 32 0 0-16 0-48 64 0 0 48 0 16 32 0 0-16 0-48 64 0 0 48 0 16 32 0 0-16 0-48 48 0 32 0 0-32 0-48 48 0 16 0 0-32-16 0-48 0 0-64 48 0 16 0 0-32-16 0-48 0 0-64 48 0 16 0 0-32-16 0-48 0 0-48 0-32-32 0-48 0 0-48 0-16L336 0l0 16 0 48-64 0 0-48 0-16L240 0l0 16 0 48-64 0 0-48zM416 96l0 320L96 416 96 96l320 0zm-64 64l0 192-192 0 0-192 192 0zM160 128l-32 0 0 32 0 192 0 32 32 0 192 0 32 0 0-32 0-192 0-32-32 0-192 0z" />
    </Icon>
);

export default Microchip;