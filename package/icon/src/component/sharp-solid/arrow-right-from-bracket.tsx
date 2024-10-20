
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-from-bracket` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-from-bracket?s=sharp-solid arrow-right-from-bracket}
 * @preview ![arrow-right-from-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-right-from-bracket.svg)
 */
const ArrowRightFromBracket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M486.6 278.6L509.3 256l-22.6-22.6-128-128L336 82.7 290.7 128l22.6 22.6L386.7 224 192 224l-32 0 0 64 32 0 194.7 0-73.4 73.4L290.7 384 336 429.3l22.6-22.6 128-128zM160 96l32 0 0-64-32 0L32 32 0 32 0 64 0 448l0 32 32 0 128 0 32 0 0-64-32 0-96 0L64 96l96 0z" />
    </Icon>
);

export default ArrowRightFromBracket;