
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-check` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-check?s=sharp-light hexagon-check}
 * @preview ![hexagon-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/hexagon-check.svg)
 */
const HexagonCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M36.9 256L146.6 64l218.9 0L475.1 256 365.4 448l-218.9 0L36.9 256zM128 32L0 256 128 480l256 0L512 256 384 32 128 32zM363.3 203.3L374.6 192 352 169.4l-11.3 11.3L224 297.4l-52.7-52.7L160 233.4 137.4 256l11.3 11.3 64 64L224 342.6l11.3-11.3 128-128z" />
    </Icon>
);

export default HexagonCheck;