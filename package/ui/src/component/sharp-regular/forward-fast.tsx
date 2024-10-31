
import { Icon } from "../../index";

/**
 * A component that renders the `forward-fast` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forward-fast?s=sharp-regular forward-fast}
 * @preview ![forward-fast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/forward-fast.svg)
 */
const ForwardFast: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 64l0 24 0 134.1L272 97.9 224 64l0 58.8 0 99.4L48 97.9 0 64l0 58.8L0 389.2 0 448l48-33.9L224 289.9l0 99.4 0 58.8 48-33.9L448 289.9 448 424l0 24 48 0 0-24 0-168 0-168 0-24-48 0zM272 256l0-99.4L412.8 256 272 355.4l0-99.4zm-83.2 0L48 355.4l0-198.7L188.8 256z" />
    </Icon>
);

export default ForwardFast;