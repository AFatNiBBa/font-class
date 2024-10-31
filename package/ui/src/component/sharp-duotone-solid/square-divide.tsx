
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-divide` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-divide?s=sharp-duotone-solid square-divide}
 * @preview ![square-divide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-divide.svg)
 */
const SquareDivide: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM112 232l24 0 176 0 24 0 0 48-24 0-176 0-24 0 0-48zm80-104l64 0 0 64-64 0 0-64zm0 192l64 0 0 64-64 0 0-64z" />
        <path d="M192 128l64 0 0 64-64 0 0-64zM112 232l24 0 176 0 24 0 0 48-24 0-176 0-24 0 0-48zm144 88l0 64-64 0 0-64 64 0z" />
    </Icon>
);

export default SquareDivide;