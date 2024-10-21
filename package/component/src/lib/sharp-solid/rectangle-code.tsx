
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-code` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-code?s=sharp-solid rectangle-code}
 * @preview ![rectangle-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/rectangle-code.svg)
 */
const RectangleCode: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 32L0 32 0 480l512 0 0-448zM209 209l-47 47 47 47 17 17L192 353.9l-17-17-64-64-17-17 17-17 64-64 17-17L225.9 192l-17 17zM337 175l64 64 17 17-17 17-64 64-17 17L286.1 320l17-17 47-47-47-47-17-17L320 158.1l17 17z" />
    </Icon>
);

export default RectangleCode;