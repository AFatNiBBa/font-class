
import { Icon } from "../../index";

/**
 * A component that renders the `square-divide` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-divide?s=sharp-solid square-divide}
 * @preview ![square-divide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-divide.svg)
 */
const SquareDivide: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM256 128l0 64-64 0 0-64 64 0zM136 232l176 0 24 0 0 48-24 0-176 0-24 0 0-48 24 0zm56 88l64 0 0 64-64 0 0-64z" />
    </Icon>
);

export default SquareDivide;