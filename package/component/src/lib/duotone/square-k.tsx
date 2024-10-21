
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-k` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-k?s=duotone square-k}
 * @preview ![square-k](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-k.svg)
 */
const SquareK: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm128 56c0-13.3 10.7-24 24-24s24 10.7 24 24l0 87.8L278.9 135.2c4.7-4.8 10.9-7.2 17.1-7.2c6.1 0 12.1 2.3 16.8 6.9c9.5 9.3 9.6 24.5 .3 33.9l-73 74.3 75.3 102.7c7.8 10.7 5.5 25.7-5.2 33.5c-4.3 3.1-9.2 4.6-14.2 4.6c-7.4 0-14.7-3.4-19.4-9.8L206 277.8l-30 30.5 0 51.7c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-61.5L128 152z" />
        <path d="M312.8 134.9c9.5 9.3 9.6 24.5 .3 33.9l-73 74.3 75.3 102.7c7.8 10.7 5.5 25.7-5.2 33.5s-25.7 5.5-33.5-5.2L206 277.8l-30 30.5 0 51.7c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-61.5L128 152c0-13.3 10.7-24 24-24s24 10.7 24 24l0 87.8L278.9 135.2c9.3-9.5 24.5-9.6 33.9-.3z" />
    </Icon>
);

export default SquareK;