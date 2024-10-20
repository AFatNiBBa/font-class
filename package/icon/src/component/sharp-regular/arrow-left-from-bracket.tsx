
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-from-bracket` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-from-bracket?s=sharp-regular arrow-left-from-bracket}
 * @preview ![arrow-left-from-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrow-left-from-bracket.svg)
 */
const ArrowLeftFromBracket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M344 432l-24 0 0 48 24 0 144 0 24 0 0-24 0-400 0-24-24 0L344 32l-24 0 0 48 24 0 120 0 0 352-120 0zM17 239L0 256l17 17L145 401l17 17L195.9 384l-17-17-87-87 234.9 0 24 0 0-48-24 0L91.9 232l87-87 17-17L161.9 94.1l-17 17L17 239z" />
    </Icon>
);

export default ArrowLeftFromBracket;