
import { Icon, generic } from "../../index";

/**
 * A component that renders the `basket-shopping-plus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/basket-shopping-plus?s=sharp-duotone-solid basket-shopping-plus}
 * @preview ![basket-shopping-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/basket-shopping-plus.svg)
 */
const BasketShoppingPlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 192l124.4 0 53.2 0 220.7 0 53.2 0L576 192l0 64-32 0L480 512 96 512 32 256 0 256l0-64zM184 328l0 48 24 0 56 0 0 56 0 24 48 0 0-24 0-56 56 0 24 0 0-48-24 0-56 0 0-56 0-24-48 0 0 24 0 56-56 0-24 0z" />
        <path d="M245.6 50.4L177.7 192l-53.2 0L202.4 29.6 212.7 8 256 28.7 245.6 50.4zm128-20.8L451.6 192l-53.2 0-68-141.6L320 28.7 363.3 8l10.4 21.6zM264 432l0-56-56 0-24 0 0-48 24 0 56 0 0-56 0-24 48 0 0 24 0 56 56 0 24 0 0 48-24 0-56 0 0 56 0 24-48 0 0-24z" />
    </Icon>
);

export default BasketShoppingPlus;