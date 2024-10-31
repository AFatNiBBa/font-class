
import { Icon } from "../../index";

/**
 * A component that renders the `warehouse-full` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/warehouse-full?s=sharp-solid warehouse-full}
 * @preview ![warehouse-full](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/warehouse-full.svg)
 */
const WarehouseFull: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 512L0 128 320 0 640 128l0 384-96 0 0-320L96 192l0 320L0 512zM512 384l0 128-160 0 0-128 160 0zM128 224l192 0 0 128-192 0 0-128zM320 384l0 128-192 0 0-128 192 0z" />
    </Icon>
);

export default WarehouseFull;