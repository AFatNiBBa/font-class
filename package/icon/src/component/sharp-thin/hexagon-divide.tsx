
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-divide` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-divide?s=sharp-thin hexagon-divide}
 * @preview ![hexagon-divide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/hexagon-divide.svg)
 */
const HexagonDivide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M18.4 256L137.3 48l237.4 0L493.6 256 374.7 464l-237.4 0L18.4 256zM128 32L0 256 128 480l256 0L512 256 384 32 128 32zM240 144l32 0 0 32-32 0 0-32zm-16-16l0 16 0 32 0 16 16 0 32 0 16 0 0-16 0-32 0-16-16 0-32 0-16 0zM152 248l-8 0 0 16 8 0 208 0 8 0 0-16-8 0-208 0zm120 88l0 32-32 0 0-32 32 0zm-32-16l-16 0 0 16 0 32 0 16 16 0 32 0 16 0 0-16 0-32 0-16-16 0-32 0z" />
    </Icon>
);

export default HexagonDivide;