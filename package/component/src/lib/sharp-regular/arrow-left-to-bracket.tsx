
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-to-bracket` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-to-bracket?s=sharp-regular arrow-left-to-bracket}
 * @preview ![arrow-left-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrow-left-to-bracket.svg)
 */
const ArrowLeftToBracket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M168 80L48 80l0 352 120 0 24 0 0 48-24 0L24 480 0 480l0-24L0 56 0 32l24 0 144 0 24 0 0 48-24 0zm-1 193l-17-17 17-17L295 111l17-17L345.9 128l-17 17-87 87L488 232l24 0 0 48-24 0-246.1 0 87 87 17 17L312 417.9l-17-17L167 273z" />
    </Icon>
);

export default ArrowLeftToBracket;