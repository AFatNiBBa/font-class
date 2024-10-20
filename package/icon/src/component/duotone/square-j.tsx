
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-j` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-j?s=duotone square-j}
 * @preview ![square-j](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-j.svg)
 */
const SquareJ: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zM112 280c0-13.3 10.7-24 24-24s24 10.7 24 24l0 8c0 26.5 21.5 48 48 48s48-21.5 48-48l0-136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 136c0 53-43 96-96 96s-96-43-96-96l0-8z" />
        <path d="M280 128c13.3 0 24 10.7 24 24l0 136c0 53-43 96-96 96s-96-43-96-96l0-8c0-13.3 10.7-24 24-24s24 10.7 24 24l0 8c0 26.5 21.5 48 48 48s48-21.5 48-48l0-136c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default SquareJ;