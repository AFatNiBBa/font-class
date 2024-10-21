
import { Icon } from "../../index";

/**
 * A component that renders the `bag-shopping-plus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bag-shopping-plus?s=sharp-solid bag-shopping-plus}
 * @preview ![bag-shopping-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bag-shopping-plus.svg)
 */
const BagShoppingPlus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48L0 160 0 512l448 0 0-352-112 0 0-48C336 50.1 285.9 0 224 0S112 50.1 112 112l0 48zm32 152l56 0 0-56 0-24 48 0 0 24 0 56 56 0 24 0 0 48-24 0-56 0 0 56 0 24-48 0 0-24 0-56-56 0-24 0 0-48 24 0z" />
    </Icon>
);

export default BagShoppingPlus;