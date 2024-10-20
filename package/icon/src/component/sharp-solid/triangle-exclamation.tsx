
import { Icon } from "../../index";

/**
 * A component that renders the `triangle-exclamation` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/triangle-exclamation?s=sharp-solid triangle-exclamation}
 * @preview ![triangle-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/triangle-exclamation.svg)
 */
const TriangleExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32L0 480l512 0L256 32zm24 160l0 24 0 112 0 24-48 0 0-24 0-112 0-24 48 0zM232 384l48 0 0 48-48 0 0-48z" />
    </Icon>
);

export default TriangleExclamation;