
import { Icon } from "../../index";

/**
 * A component that renders the `coffee-pot` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coffee-pot?s=solid coffee-pot}
 * @preview ![coffee-pot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/coffee-pot.svg)
 */
const CoffeePot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 128c0-17.7 14.3-32 32-32l12.8 0 34 84.9C95 215.9 64 272.3 64 336l0 8c0 55.5 34.6 99.4 55.9 121.2c9.9 10.2 23.9 14.8 38.1 14.8L418 480c14.2 0 28.1-4.7 38.1-14.8C477.4 443.4 512 399.5 512 344l0-8c0-63.7-31-120.1-78.8-155.1L478.1 68.8c1.3-3.2 1.9-6.6 1.9-10C480 44 468 32 453.2 32L192 32l-69.2 0L96 32C43 32 0 75 0 128l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64zm65 192c5.2-41.4 30.1-76.6 65-96l188 0c34.9 19.4 59.8 54.6 65 96l-318 0z" />
    </Icon>
);

export default CoffeePot;