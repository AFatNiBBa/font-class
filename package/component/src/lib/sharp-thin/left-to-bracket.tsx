
import { Icon } from "../../index";

/**
 * A component that renders the `left-to-bracket` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-to-bracket?s=sharp-thin left-to-bracket}
 * @preview ![left-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/left-to-bracket.svg)
 */
const LeftToBracket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 320l0 16 0 64 0 16-16 0-16 0L171.3 267.3 160 256l11.3-11.3L320 96l16 0 16 0 0 16 0 64 0 16 16 0 128 0 16 0 0 16 0 96 0 16-16 0-128 0-16 0zm-16 0l0-16 16 0 144 0 0-96-144 0-16 0 0-16 0-80-9.4 0-144 144 144 144 9.4 0 0-80zM184 464l8 0 0 16-8 0L8 480c-4.4 0-8-3.6-8-8L0 40c0-4.4 3.6-8 8-8l176 0 8 0 0 16-8 0L16 48l0 416 168 0z" />
    </Icon>
);

export default LeftToBracket;