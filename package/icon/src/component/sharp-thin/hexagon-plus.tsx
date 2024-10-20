
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-plus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-plus?s=sharp-thin hexagon-plus}
 * @preview ![hexagon-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/hexagon-plus.svg)
 */
const HexagonPlus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M18.4 256L137.3 48l237.4 0L493.6 256 374.7 464l-237.4 0L18.4 256zM128 32L0 256 128 480l256 0L512 256 384 32 128 32zM264 160l-16 0 0 8 0 80-80 0-8 0 0 16 8 0 80 0 0 80 0 8 16 0 0-8 0-80 80 0 8 0 0-16-8 0-80 0 0-80 0-8z" />
    </Icon>
);

export default HexagonPlus;