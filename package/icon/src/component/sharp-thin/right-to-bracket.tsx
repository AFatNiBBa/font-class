
import { Icon } from "../../index";

/**
 * A component that renders the `right-to-bracket` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-to-bracket?s=sharp-thin right-to-bracket}
 * @preview ![right-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/right-to-bracket.svg)
 */
const RightToBracket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 320l0 16 0 64 0 16 16 0 16 0L340.7 267.3 352 256l-11.3-11.3L192 96l-16 0-16 0 0 16 0 64 0 16-16 0L16 192 0 192l0 16 0 96 0 16 16 0 128 0 16 0zm16 0l0-16-16 0L16 304l0-96 144 0 16 0 0-16 0-80 9.4 0 144 144-144 144-9.4 0 0-80zM328 464l-8 0 0 16 8 0 176 0c4.4 0 8-3.6 8-8l0-432c0-4.4-3.6-8-8-8L328 32l-8 0 0 16 8 0 168 0 0 416-168 0z" />
    </Icon>
);

export default RightToBracket;