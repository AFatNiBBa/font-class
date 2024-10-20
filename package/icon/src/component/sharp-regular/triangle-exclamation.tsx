
import { Icon } from "../../index";

/**
 * A component that renders the `triangle-exclamation` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/triangle-exclamation?s=sharp-regular triangle-exclamation}
 * @preview ![triangle-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/triangle-exclamation.svg)
 */
const TriangleExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M27.4 432L0 480l55.3 0 401.4 0 55.3 0-27.4-48L283.6 80.4 256 32 228.4 80.4 27.4 432zm401.9 0L82.7 432 256 128.7 429.3 432zM232 296l0 24 48 0 0-24 0-88-48 0 0 88zm48 104l0-48-48 0 0 48 48 0z" />
    </Icon>
);

export default TriangleExclamation;