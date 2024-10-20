
import { Icon, generic } from "../../index";

/**
 * A component that renders the `basket-shopping-minus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/basket-shopping-minus?s=sharp-duotone-solid basket-shopping-minus}
 * @preview ![basket-shopping-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/basket-shopping-minus.svg)
 */
const BasketShoppingMinus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 192l124.4 0 53.2 0 220.7 0 53.2 0L576 192l0 64-32 0L480 512 96 512 32 256 0 256l0-64zM184 328l0 48 24 0 160 0 24 0 0-48-24 0-160 0-24 0z" />
        <path d="M245.6 50.4L256 28.7 212.7 8 202.4 29.6 124.4 192l53.2 0 68-141.6zm128-20.8L363.3 8 320 28.7l10.4 21.6 68 141.6 53.2 0L373.6 29.6zM208 328l-24 0 0 48 24 0 160 0 24 0 0-48-24 0-160 0z" />
    </Icon>
);

export default BasketShoppingMinus;