
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-from-bracket` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-from-bracket?s=sharp-duotone-solid arrow-down-from-bracket}
 * @preview ![arrow-down-from-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-down-from-bracket.svg)
 */
const ArrowDownFromBracket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 32 0 160l0 32 64 0 0-32 0-96 320 0 0 96 0 32 64 0 0-32 0-128 0-32L416 0 32 0 0 0z" />
        <path d="M224 509.3l-22.6-22.6-128-128L50.7 336 96 290.7l22.6 22.6L192 386.7 192 192l0-32 64 0 0 32 0 194.7 73.4-73.4L352 290.7 397.3 336l-22.6 22.6-128 128L224 509.3z" />
    </Icon>
);

export default ArrowDownFromBracket;