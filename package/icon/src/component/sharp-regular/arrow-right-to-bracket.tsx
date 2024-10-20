
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-to-bracket` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-to-bracket?s=sharp-regular arrow-right-to-bracket}
 * @preview ![arrow-right-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrow-right-to-bracket.svg)
 */
const ArrowRightToBracket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M344 80l120 0 0 352-120 0-24 0 0 48 24 0 144 0 24 0 0-24 0-400 0-24-24 0L344 32l-24 0 0 48 24 0zm1 193l17-17-17-17L217 111l-17-17L166.1 128l17 17 87 87L24 232 0 232l0 48 24 0 246.1 0-87 87-17 17L200 417.9l17-17L345 273z" />
    </Icon>
);

export default ArrowRightToBracket;