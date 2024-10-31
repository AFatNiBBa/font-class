
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-from-bracket` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-from-bracket?s=sharp-solid arrow-left-from-bracket}
 * @preview ![arrow-left-from-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-left-from-bracket.svg)
 */
const ArrowLeftFromBracket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M22.6 233.4L0 256l22.6 22.6 128 128 22.6 22.6L218.5 384l-22.6-22.6L122.5 288 320 288l32 0 0-64-32 0-197.5 0 73.4-73.4L218.5 128 173.3 82.7l-22.6 22.6-128 128zM352 416l-32 0 0 64 32 0 128 0 32 0 0-32 0-384 0-32-32 0L352 32l-32 0 0 64 32 0 96 0 0 320-96 0z" />
    </Icon>
);

export default ArrowLeftFromBracket;