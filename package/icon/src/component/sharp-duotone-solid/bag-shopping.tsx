
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bag-shopping` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bag-shopping?s=sharp-duotone-solid bag-shopping}
 * @preview ![bag-shopping](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bag-shopping.svg)
 */
const BagShopping: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 160L0 512l448 0 0-352-112 0 0 72 0 24-48 0 0-24 0-72-128 0 0 72 0 24-48 0 0-24 0-72L0 160z" />
        <path d="M224 48c-35.3 0-64 28.7-64 64l0 120 0 24-48 0 0-24 0-120C112 50.1 162.1 0 224 0s112 50.1 112 112l0 120 0 24-48 0 0-24 0-120c0-35.3-28.7-64-64-64z" />
    </Icon>
);

export default BagShopping;