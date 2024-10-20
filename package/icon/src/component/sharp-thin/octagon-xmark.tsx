
import { Icon } from "../../index";

/**
 * A component that renders the `octagon-xmark` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-xmark?s=sharp-thin octagon-xmark}
 * @preview ![octagon-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/octagon-xmark.svg)
 */
const OctagonXmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 345.4l0-178.7L166.6 16l178.7 0L496 166.6l0 178.7L345.4 496l-178.7 0L16 345.4zM160 0L0 160 0 352 160 512l192 0L512 352l0-192L352 0 160 0zm25.8 174.5l-11.3 11.3 5.7 5.7L244.7 256l-64.6 64.6-5.7 5.7 11.3 11.3 5.7-5.7L256 267.3l64.6 64.6 5.7 5.7 11.3-11.3-5.7-5.7L267.3 256l64.6-64.6 5.7-5.7-11.3-11.3-5.7 5.7L256 244.7l-64.6-64.6-5.7-5.7z" />
    </Icon>
);

export default OctagonXmark;