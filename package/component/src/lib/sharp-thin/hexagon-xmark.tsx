
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-xmark` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-xmark?s=sharp-thin hexagon-xmark}
 * @preview ![hexagon-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/hexagon-xmark.svg)
 */
const HexagonXmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M18.4 256L137.3 48l237.4 0L493.6 256 374.7 464l-237.4 0L18.4 256zM128 32L0 256 128 480l256 0L512 256 384 32 128 32zm57.8 142.5l-11.3 11.3 5.7 5.7L244.7 256l-64.6 64.6-5.7 5.7 11.3 11.3 5.7-5.7L256 267.3l64.6 64.6 5.7 5.7 11.3-11.3-5.7-5.7L267.3 256l64.6-64.6 5.7-5.7-11.3-11.3-5.7 5.7L256 244.7l-64.6-64.6-5.7-5.7z" />
    </Icon>
);

export default HexagonXmark;