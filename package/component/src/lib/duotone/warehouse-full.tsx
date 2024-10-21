
import { Icon, generic } from "../../index";

/**
 * A component that renders the `warehouse-full` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/warehouse-full?s=duotone warehouse-full}
 * @preview ![warehouse-full](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/warehouse-full.svg)
 */
const WarehouseFull: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 248c0-13.3 10.7-24 24-24l144 0c13.3 0 24 10.7 24 24l0 80c0 13.3-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24l0-80zm0 160c0-13.3 10.7-24 24-24l144 0c13.3 0 24 10.7 24 24l0 80c0 13.3-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24l0-80zm224 0c0-13.3 10.7-24 24-24l112 0c13.3 0 24 10.7 24 24l0 80c0 13.3-10.7 24-24 24l-112 0c-13.3 0-24-10.7-24-24l0-80z" />
        <path d="M0 171.3V488c0 13.3 10.7 24 24 24H72c13.3 0 24-10.7 24-24V224c0-17.7 14.3-32 32-32H512c17.7 0 32 14.3 32 32V488c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V171.3c0-26.2-15.9-49.7-40.2-59.4L331.9 4.8c-7.6-3.1-16.1-3.1-23.8 0L40.2 111.9C15.9 121.6 0 145.2 0 171.3z" />
    </Icon>
);

export default WarehouseFull;