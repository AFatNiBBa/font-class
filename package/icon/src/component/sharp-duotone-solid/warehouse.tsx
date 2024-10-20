
import { Icon, generic } from "../../index";

/**
 * A component that renders the `warehouse` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/warehouse?s=sharp-duotone-solid warehouse}
 * @preview ![warehouse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/warehouse.svg)
 */
const Warehouse: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 224l0 80 384 0 0-80-384 0zm0 112l0 64 384 0 0-64-384 0zm0 96l0 80 384 0 0-80-384 0z" />
        <path d="M0 128V512H96V192H544V512h96V128L320 0 0 128z" />
    </Icon>
);

export default Warehouse;