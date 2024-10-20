
import { Icon, generic } from "../../index";

/**
 * A component that renders the `warehouse-full` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/warehouse-full?s=sharp-duotone-solid warehouse-full}
 * @preview ![warehouse-full](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/warehouse-full.svg)
 */
const WarehouseFull: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 224l192 0 0 128-192 0 0-128zm0 160l192 0 0 128-192 0 0-128zm224 0l160 0 0 128-160 0 0-128z" />
        <path d="M0 128V512H96V192H544V512h96V128L320 0 0 128z" />
    </Icon>
);

export default WarehouseFull;