
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-arrow-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-right?s=duotone square-arrow-right}
 * @preview ![square-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-arrow-right.svg)
 */
const SquareArrowRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zM80 256c0-13.3 10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9c4.7-4.7 10.8-7 17-7s12.3 2.3 17 7L361 239c4.7 4.7 7 10.8 7 17s-2.3 12.3-7 17L249 385c-4.7 4.7-10.8 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l71-71L104 280c-13.3 0-24-10.7-24-24z" />
        <path d="M361 239c9.4 9.4 9.4 24.6 0 33.9L249 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L104 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L361 239z" />
    </Icon>
);

export default SquareArrowRight;