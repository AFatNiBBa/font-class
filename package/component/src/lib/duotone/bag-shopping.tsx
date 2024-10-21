
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bag-shopping` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bag-shopping?s=duotone bag-shopping}
 * @preview ![bag-shopping](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bag-shopping.svg)
 */
const BagShopping: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 208L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0 72c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-72-128 0 0 72c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-72-64 0c-26.5 0-48 21.5-48 48z" />
        <path d="M224 48c-35.3 0-64 28.7-64 64l0 120c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-120C112 50.1 162.1 0 224 0s112 50.1 112 112l0 120c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-120c0-35.3-28.7-64-64-64z" />
    </Icon>
);

export default BagShopping;