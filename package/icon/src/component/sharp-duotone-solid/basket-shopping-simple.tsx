
import { Icon, generic } from "../../index";

/**
 * A component that renders the `basket-shopping-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/basket-shopping-simple?s=sharp-duotone-solid basket-shopping-simple}
 * @preview ![basket-shopping-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/basket-shopping-simple.svg)
 */
const BasketShoppingSimple: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 192l0 64 32 0L96 512l384 0 64-256 32 0 0-64-130.2 0c8 18.1 16.1 36.2 24.1 54.3c3.3 7.3 6.5 14.6 9.8 21.9l-43.9 19.5-9.7-21.9L393.3 192l-210.6 0-32.8 73.7c-3.2 7.3-6.5 14.6-9.7 21.9c-14.6-6.5-29.2-13-43.9-19.5l9.7-21.9c8-18.1 16.1-36.2 24.1-54.3L0 192z" />
        <path d="M245.9 49.7l9.7-21.9L211.8 8.3l-9.7 21.9-96 216-9.7 21.9 43.9 19.5 9.7-21.9 96-216zm84.1 0l96 216 9.7 21.9 43.9-19.5-9.7-21.9-96-216L364.2 8.3 320.3 27.8l9.7 21.9z" />
    </Icon>
);

export default BasketShoppingSimple;