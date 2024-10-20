
import { Icon } from "../../index";

/**
 * A component that renders the `square-divide` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-divide?s=sharp-thin square-divide}
 * @preview ![square-divide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-divide.svg)
 */
const SquareDivide: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM208 144l0 32 32 0 0-32-32 0zm-16-16l16 0 32 0 16 0 0 16 0 32 0 16-16 0-32 0-16 0 0-16 0-32 0-16zM120 248l208 0 8 0 0 16-8 0-208 0-8 0 0-16 8 0zm120 88l-32 0 0 32 32 0 0-32zm-32-16l32 0 16 0 0 16 0 32 0 16-16 0-32 0-16 0 0-16 0-32 0-16 16 0z" />
    </Icon>
);

export default SquareDivide;