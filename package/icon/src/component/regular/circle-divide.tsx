
import { Icon } from "../../index";

/**
 * A component that renders the `circle-divide` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-divide?s=regular circle-divide}
 * @preview ![circle-divide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-divide.svg)
 */
const CircleDivide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-320a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-88 40c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0zM288 352a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default CircleDivide;