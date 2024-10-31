
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plane-departure` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane-departure?s=sharp-duotone-solid plane-departure}
 * @preview ![plane-departure](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/plane-departure.svg)
 */
const PlaneDeparture: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 448l32 0 576 0 32 0 0 64-32 0L32 512 0 512l0-64z" />
        <path d="M381 114.9L160 32 64 80 234.6 189.7 136 240 64 208 0 240 96 352l160 0L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48l-57.4 0c-20.2 0-40.2 4.8-58.2 14L381 114.9z" />
    </Icon>
);

export default PlaneDeparture;