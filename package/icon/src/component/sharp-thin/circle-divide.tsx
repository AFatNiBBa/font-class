
import { Icon } from "../../index";

/**
 * A component that renders the `circle-divide` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-divide?s=sharp-thin circle-divide}
 * @preview ![circle-divide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-divide.svg)
 */
const CircleDivide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM240 176l0-32 32 0 0 32-32 0zm-16-48l0 16 0 32 0 16 16 0 32 0 16 0 0-16 0-32 0-16-16 0-32 0-16 0zM152 248l-8 0 0 16 8 0 208 0 8 0 0-16-8 0-208 0zM272 368l-32 0 0-32 32 0 0 32zm-32-48l-16 0 0 16 0 32 0 16 16 0 32 0 16 0 0-16 0-32 0-16-16 0-32 0z" />
    </Icon>
);

export default CircleDivide;