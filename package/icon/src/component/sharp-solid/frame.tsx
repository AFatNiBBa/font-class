
import { Icon } from "../../index";

/**
 * A component that renders the `frame` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/frame?s=sharp-solid frame}
 * @preview ![frame](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/frame.svg)
 */
const Frame: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 160l0-64-64 0 0-64-64 0 0 64L128 96l0-64L64 32l0 64L0 96l0 64 64 0 0 192L0 352l0 64 64 0 0 64 64 0 0-64 192 0 0 64 64 0 0-64 64 0 0-64-64 0 0-192 64 0zM128 352l0-192 192 0 0 192-192 0z" />
    </Icon>
);

export default Frame;