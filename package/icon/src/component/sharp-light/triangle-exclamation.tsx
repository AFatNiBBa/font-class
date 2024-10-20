
import { Icon } from "../../index";

/**
 * A component that renders the `triangle-exclamation` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/triangle-exclamation?s=sharp-light triangle-exclamation}
 * @preview ![triangle-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/triangle-exclamation.svg)
 */
const TriangleExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M18.3 448L0 480l36.9 0 438.3 0 36.9 0-18.3-32L274.4 64.2 256 32 237.6 64.2 18.3 448zm438.6 0L55.1 448 256 96.5 456.9 448zM240 320l0 16 32 0 0-16 0-128-32 0 0 128zm40 96l0-48-48 0 0 48 48 0z" />
    </Icon>
);

export default TriangleExclamation;