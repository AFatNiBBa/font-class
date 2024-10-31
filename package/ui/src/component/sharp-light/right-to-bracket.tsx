
import { Icon } from "../../index";

/**
 * A component that renders the `right-to-bracket` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-to-bracket?s=sharp-light right-to-bracket}
 * @preview ![right-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/right-to-bracket.svg)
 */
const RightToBracket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M144 208l32 0 0-32 0-48 17.7 0L308.9 256 193.7 384 176 384l0-48 0-32-32 0L32 304l0-96 112 0zm0-112l0 32 0 16 0 32-32 0-80 0L0 176l0 32 0 96 0 32 32 0 80 0 32 0 0 32 0 16 0 32 32 0 32 0L352 256 208 96l-32 0-32 0zM336 448l-16 0 0 32 16 0 160 0 16 0 0-16 0-416 0-16-16 0L336 32l-16 0 0 32 16 0 144 0 0 384-144 0z" />
    </Icon>
);

export default RightToBracket;