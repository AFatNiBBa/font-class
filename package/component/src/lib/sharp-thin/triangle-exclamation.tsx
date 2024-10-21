
import { Icon } from "../../index";

/**
 * A component that renders the `triangle-exclamation` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/triangle-exclamation?s=sharp-thin triangle-exclamation}
 * @preview ![triangle-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/triangle-exclamation.svg)
 */
const TriangleExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M9.1 464L0 480l18.4 0 475.1 0 18.4 0-9.1-16L265.2 48.1 256 32l-9.2 16.1L9.1 464zm475.3 0L27.6 464 256 64.2 484.4 464zM264 176l-16 0 0 8 0 160 0 8 16 0 0-8 0-160 0-8zM240 416l32 0 0-32-32 0 0 32z" />
    </Icon>
);

export default TriangleExclamation;