
import { Icon } from "../../index";

/**
 * A component that renders the `frame` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/frame?s=sharp-thin frame}
 * @preview ![frame](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/frame.svg)
 */
const Frame: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 112l0-16-64 0 0-64-16 0 0 64L80 96l0-64L64 32l0 64L0 96l0 16 64 0 0 288L0 400l0 16 64 0 0 64 16 0 0-64 288 0 0 64 16 0 0-64 64 0 0-16-64 0 0-288 64 0zM80 400l0-288 288 0 0 288L80 400z" />
    </Icon>
);

export default Frame;