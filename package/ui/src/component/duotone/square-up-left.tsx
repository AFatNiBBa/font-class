
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-up-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-up-left?s=duotone square-up-left}
 * @preview ![square-up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-up-left.svg)
 */
const SquareUpLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm128 80c0-8.8 7.2-16 16-16l137.4 0c12.5 0 22.6 10.1 22.6 22.6c0 6-2.4 11.8-6.6 16L264 232l66.3 66.3c3.6 3.6 5.7 8.5 5.7 13.7s-2 10-5.7 13.7l-36.7 36.7C290 366 285.1 368 280 368s-10-2-13.7-5.7L200 296l-33.4 33.4c-4.2 4.2-10 6.6-16 6.6c-12.5 0-22.6-10.1-22.6-22.6L128 176z" />
        <path d="M128 176l0 137.4c0 12.5 10.1 22.6 22.6 22.6c6 0 11.8-2.4 16-6.6L200 296l66.3 66.3c3.6 3.6 8.5 5.7 13.7 5.7s10-2 13.7-5.7l36.7-36.7c3.6-3.6 5.7-8.5 5.7-13.7s-2-10-5.7-13.7L264 232l33.4-33.4c4.2-4.2 6.6-10 6.6-16c0-12.5-10.1-22.6-22.6-22.6L144 160c-8.8 0-16 7.2-16 16z" />
    </Icon>
);

export default SquareUpLeft;