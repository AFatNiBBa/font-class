
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-xmark` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-xmark?s=sharp-light hexagon-xmark}
 * @preview ![hexagon-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/hexagon-xmark.svg)
 */
const HexagonXmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M36.9 256L146.6 64l218.9 0L475.1 256 365.4 448l-218.9 0L36.9 256zM128 32L0 256 128 480l256 0L512 256 384 32 128 32zm63.4 136.8l-22.6 22.6 11.3 11.3L233.4 256l-53.3 53.3-11.3 11.3 22.6 22.6 11.3-11.3L256 278.6l53.3 53.3 11.3 11.3 22.6-22.6-11.3-11.3L278.6 256l53.3-53.3 11.3-11.3-22.6-22.6-11.3 11.3L256 233.4l-53.3-53.3-11.3-11.3z" />
    </Icon>
);

export default HexagonXmark;