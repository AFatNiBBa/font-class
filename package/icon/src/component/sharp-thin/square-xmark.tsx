
import { Icon } from "../../index";

/**
 * A component that renders the `square-xmark` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-xmark?s=sharp-thin square-xmark}
 * @preview ![square-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-xmark.svg)
 */
const SquareXmark: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM153.8 174.5l5.7 5.7L224 244.7l64.6-64.6 5.7-5.7 11.3 11.3-5.7 5.7L235.3 256l64.6 64.6 5.7 5.7-11.3 11.3-5.7-5.7L224 267.3l-64.6 64.6-5.7 5.7-11.3-11.3 5.7-5.7L212.7 256l-64.6-64.6-5.7-5.7 11.3-11.3z" />
    </Icon>
);

export default SquareXmark;