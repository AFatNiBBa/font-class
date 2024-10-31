
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bracket-curly-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-curly-right?s=sharp-duotone-solid bracket-curly-right}
 * @preview ![bracket-curly-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bracket-curly-right.svg)
 */
const BracketCurlyRight: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M160 32l32 0 0 32 0 114.7 54.6 54.6 9.4 9.4 0 26.5-9.4 9.4L192 333.3 192 448l0 32-32 0-96 0-32 0 0-64 32 0 64 0 0-96 0-13.3 9.4-9.4L178.7 256l-41.4-41.4-9.4-9.4 0-13.3 0-96L64 96 32 96l0-64 32 0 96 0z" />
    </Icon>
);

export default BracketCurlyRight;