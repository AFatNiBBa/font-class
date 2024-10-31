
import { Icon, generic } from "../../index";

/**
 * A component that renders the `coffee-pot` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coffee-pot?s=duotone coffee-pot}
 * @preview ![coffee-pot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/coffee-pot.svg)
 */
const CoffeePot: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 328l0 16c0 55.5 34.6 99.4 55.9 121.2c9.9 10.2 23.9 14.8 38.1 14.8L418 480c14.2 0 28.1-4.7 38.1-14.8C477.4 443.4 512 399.5 512 344l0-16c0-67.2-39.4-125.1-96.4-152l-255.3 0C103.4 202.9 64 260.8 64 328zm64.3-8c4.1-53.7 49-96 103.7-96l112 0c54.7 0 99.6 42.3 103.7 96c.2 2.6 .3 5.3 .3 8l0 16c0 27.4-16.8 53.7-33.5 72l-253.1 0c-16.7-18.3-33.5-44.6-33.5-72l0-16c0-2.7 .1-5.4 .3-8z" />
        <path d="M96 96c-17.7 0-32 14.3-32 32l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64C0 75 43 32 96 32l25.3 0L192 32l262.7 0c14 0 25.3 11.3 25.3 25.3c0 4.4-1.1 8.7-3.3 12.5L416 176l-256 0L114.3 96 96 96zM448 344c0 27.4-16.8 53.7-33.5 72l-253.1 0c-16.7-18.3-33.5-44.6-33.5-72l0-16c0-2.7 .1-5.4 .3-8l319.4 0c.2 2.6 .3 5.3 .3 8l0 16z" />
    </Icon>
);

export default CoffeePot;