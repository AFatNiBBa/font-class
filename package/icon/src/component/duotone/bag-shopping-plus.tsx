
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bag-shopping-plus` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bag-shopping-plus?s=duotone bag-shopping-plus}
 * @preview ![bag-shopping-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bag-shopping-plus.svg)
 */
const BagShoppingPlus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 208c0-26.5 21.5-48 48-48l64 0 48 0 128 0 48 0 64 0c26.5 0 48 21.5 48 48l0 208c0 53-43 96-96 96L96 512c-53 0-96-43-96-96L0 208zM120 336c0 13.3 10.7 24 24 24l56 0 0 56c0 13.3 10.7 24 24 24s24-10.7 24-24l0-56 56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-56 0 0-56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 56-56 0c-13.3 0-24 10.7-24 24z" />
        <path d="M224 48c-35.3 0-64 28.7-64 64l0 48-48 0 0-48C112 50.1 162.1 0 224 0s112 50.1 112 112l0 48-48 0 0-48c0-35.3-28.7-64-64-64zM120 336c0-13.3 10.7-24 24-24l56 0 0-56c0-13.3 10.7-24 24-24s24 10.7 24 24l0 56 56 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-56 0 0 56c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-56-56 0c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default BagShoppingPlus;