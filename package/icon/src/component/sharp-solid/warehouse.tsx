
import { Icon } from "../../index";

/**
 * A component that renders the `warehouse` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/warehouse?s=sharp-solid warehouse}
 * @preview ![warehouse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/warehouse.svg)
 */
const Warehouse: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 512L0 128 320 0 640 128l0 384-96 0 0-320L96 192l0 320L0 512zm128-80l384 0 0 80-384 0 0-80zm0-96l384 0 0 64-384 0 0-64zm0-112l384 0 0 80-384 0 0-80z" />
    </Icon>
);

export default Warehouse;