
import { Icon } from "../../index";

/**
 * A component that renders the `bracket-curly` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-curly?s=sharp-light bracket-curly}
 * @preview ![bracket-curly](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bracket-curly.svg)
 */
const BracketCurly: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M80 32L64 32l0 16 0 137.4L4.7 244.7 0 249.4l0 13.3 4.7 4.7L64 326.6 64 464l0 16 16 0 128 0 16 0 0-32-16 0L96 448l0-128 0-6.6-4.7-4.7L38.6 256l52.7-52.7 4.7-4.7 0-6.6L96 64l112 0 16 0 0-32-16 0L80 32z" />
    </Icon>
);

export default BracketCurly;