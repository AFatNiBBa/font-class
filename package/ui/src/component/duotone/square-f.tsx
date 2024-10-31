
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-f` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-f?s=duotone square-f}
 * @preview ![square-f](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-f.svg)
 */
const SquareF: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm128 56c0-13.3 10.7-24 24-24l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-120 0 0 64 88 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-88 0 0 72c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-96 0-112z" />
        <path d="M128 152c0-13.3 10.7-24 24-24l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-120 0 0 64 88 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-88 0 0 72c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-96 0-112z" />
    </Icon>
);

export default SquareF;