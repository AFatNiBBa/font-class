
import { Icon } from "../../index";

/**
 * A component that renders the `octagon-check` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-check?s=sharp-thin octagon-check}
 * @preview ![octagon-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/octagon-check.svg)
 */
const OctagonCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 345.4l0-178.7L166.6 16l178.7 0L496 166.6l0 178.7L345.4 496l-178.7 0L16 345.4zM160 0L0 160 0 352 160 512l192 0L512 352l0-192L352 0 160 0zM357.7 197.7l5.7-5.7L352 180.7l-5.7 5.7L224 308.7l-58.3-58.3-5.7-5.7L148.7 256l5.7 5.7 64 64 5.7 5.7 5.7-5.7 128-128z" />
    </Icon>
);

export default OctagonCheck;