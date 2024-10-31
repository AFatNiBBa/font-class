
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-d` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-d?s=duotone square-d}
 * @preview ![square-d](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-d.svg)
 */
const SquareD: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm128 56c0-13.3 10.7-24 24-24l72 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-72 0c-13.3 0-24-10.7-24-24l0-208zm48 24l0 160 48 0c44.2 0 80-35.8 80-80s-35.8-80-80-80l-48 0z" />
        <path d="M128 152c0-13.3 10.7-24 24-24l72 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-72 0c-13.3 0-24-10.7-24-24l0-208zm48 24l0 160 48 0c44.2 0 80-35.8 80-80s-35.8-80-80-80l-48 0z" />
    </Icon>
);

export default SquareD;