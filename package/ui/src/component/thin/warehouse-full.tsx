
import { Icon } from "../../index";

/**
 * A component that renders the `warehouse-full` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/warehouse-full?s=thin warehouse-full}
 * @preview ![warehouse-full](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/warehouse-full.svg)
 */
const WarehouseFull: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M329.1 20.4c-5.8-2.4-12.4-2.4-18.2 0L40.8 131.2c-15 6.2-24.8 20.8-24.8 37L16 504c0 4.4-3.6 8-8 8s-8-3.6-8-8L0 168.2c0-22.7 13.7-43.2 34.7-51.8L304.8 5.6c9.7-4 20.6-4 30.4 0L605.3 116.4c21 8.6 34.7 29.1 34.7 51.8L640 504c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-335.8c0-16.2-9.8-30.8-24.8-37L329.1 20.4zM120 208c-4.4 0-8 3.6-8 8l0 288c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-288c0-13.3 10.7-24 24-24l400 0c13.3 0 24 10.7 24 24l0 288c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-288c0-4.4-3.6-8-8-8l-400 0zM320 320c0-8.8-7.2-16-16-16l-112 0c-8.8 0-16 7.2-16 16l0 64 144 0 0-16 0-48zm0 80l-144 0 0 80c0 8.8 7.2 16 16 16l128 0 0-96zm16 96l112 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-112 0 0 96zm0-112l16 0 96 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-80 0-16 0-64c0-17.7 14.3-32 32-32l112 0c17.7 0 32 14.3 32 32l0 48 0 16z" />
    </Icon>
);

export default WarehouseFull;