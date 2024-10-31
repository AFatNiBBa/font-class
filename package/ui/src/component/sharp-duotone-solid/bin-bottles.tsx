
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bin-bottles` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bin-bottles?s=sharp-duotone-solid bin-bottles}
 * @preview ![bin-bottles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bin-bottles.svg)
 */
const BinBottles: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 144l0 48 320 0 0-48-32.4-16.2L256 96 128 96 32 144zM112 32l0 32 16 0 128 0 16 0 0-32-16 0 0-32L128 0l0 32-16 0zM321.8 93.1l44.5 22.3 17.7 8.8 0 19.8 0 48 191.6 0 0-56 0-41.9-64-30 0-64.1-128 0 0 64.1-61.8 29z" />
        <path d="M640 224L0 224l0 64 32 0L64 512l512 0 32-224 32 0 0-64z" />
    </Icon>
);

export default BinBottles;