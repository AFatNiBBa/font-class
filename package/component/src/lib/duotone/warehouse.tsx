
import { Icon, generic } from "../../index";

/**
 * A component that renders the `warehouse` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/warehouse?s=duotone warehouse}
 * @preview ![warehouse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/warehouse.svg)
 */
const Warehouse: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 224l0 80 384 0 0-80-384 0zm0 112l0 64 384 0 0-64-384 0zm0 96l0 56c0 13.3 10.7 24 24 24l336 0c13.3 0 24-10.7 24-24l0-56-384 0z" />
        <path d="M0 171.3V488c0 13.3 10.7 24 24 24H72c13.3 0 24-10.7 24-24V224c0-17.7 14.3-32 32-32H512c17.7 0 32 14.3 32 32V488c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V171.3c0-26.2-15.9-49.7-40.2-59.4L331.9 4.8c-7.6-3.1-16.1-3.1-23.8 0L40.2 111.9C15.9 121.6 0 145.2 0 171.3z" />
    </Icon>
);

export default Warehouse;