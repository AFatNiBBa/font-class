
import { Icon } from "../../index";

/**
 * A component that renders the `basket-shopping` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/basket-shopping?s=light basket-shopping}
 * @preview ![basket-shopping](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/basket-shopping.svg)
 */
const BasketShopping: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M327.9 2.2c-7.6 4.5-10.2 14.2-5.8 21.9l98 167.9-264.3 0 98-167.9c4.5-7.6 1.9-17.4-5.8-21.9s-17.4-1.9-21.9 5.8L118.8 192 65 192l-33 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24 0L99.9 463.5C107 492 132.6 512 162 512L414 512c29.4 0 55-20 62.1-48.5L536 224l24 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0-33 0-53.8 0L349.8 7.9c-4.5-7.6-14.2-10.2-21.9-5.8zM73 224l430 0L445.1 455.8C441.5 470 428.7 480 414 480L162 480c-14.7 0-27.5-10-31-24.2L73 224zm151 80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96zm64-16c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96c0-8.8-7.2-16-16-16zm96 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96z" />
    </Icon>
);

export default BasketShopping;