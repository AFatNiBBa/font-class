
import { Icon, generic } from "../../index";

/**
 * A component that renders the `stars` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stars?s=sharp-duotone-solid stars}
 * @preview ![stars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/stars.svg)
 */
const Stars: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 80l60 20 20 60 20-60 60-20L356 60 336 0 316 60 256 80zM384 224l48 16 16 48 16-48 48-16-48-16-16-48-16 48-48 16z" />
        <path d="M193.5 144l59.8 121.1 133.7 19.4-96.7 94.3L313 512 193.5 449.1 73.9 512 96.7 378.9 0 284.6l133.7-19.4L193.5 144z" />
    </Icon>
);

export default Stars;