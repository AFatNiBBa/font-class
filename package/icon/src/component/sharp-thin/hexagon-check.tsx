
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-check` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-check?s=sharp-thin hexagon-check}
 * @preview ![hexagon-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/hexagon-check.svg)
 */
const HexagonCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M18.4 256L137.3 48l237.4 0L493.6 256 374.7 464l-237.4 0L18.4 256zM128 32L0 256 128 480l256 0L512 256 384 32 128 32zM357.7 197.7l5.7-5.7L352 180.7l-5.7 5.7L224 308.7l-58.3-58.3-5.7-5.7L148.7 256l5.7 5.7 64 64 5.7 5.7 5.7-5.7 128-128z" />
    </Icon>
);

export default HexagonCheck;