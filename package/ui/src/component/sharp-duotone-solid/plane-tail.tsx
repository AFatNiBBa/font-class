
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plane-tail` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane-tail?s=sharp-duotone-solid plane-tail}
 * @preview ![plane-tail](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/plane-tail.svg)
 */
const PlaneTail: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M-8 0L61.5 308.8c62.7-17.3 125.4-34.6 188.1-51.9l3.1-.9 3.2 0 8.7 0L384 256 136 0-8 0z" />
        <path d="M252.8 256l3.2 0 232 0 24 0 0 24 0 24 0 160 0 24 0 24-24 0-232 0-4.4 0-4.1-1.6-232-88L0 416.6 0 400l0-56 0-18.3 17.6-4.9 232-64 3.1-.9zM216 352l-24 0 0 48 24 0 144 0 24 0 0-48-24 0-144 0z" />
    </Icon>
);

export default PlaneTail;