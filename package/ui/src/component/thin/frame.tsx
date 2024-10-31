
import { Icon } from "../../index";

/**
 * A component that renders the `frame` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/frame?s=thin frame}
 * @preview ![frame](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/frame.svg)
 */
const Frame: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 104c0-4.4-3.6-8-8-8l-56 0 0-56c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 56L80 96l0-56c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 56L8 96c-4.4 0-8 3.6-8 8s3.6 8 8 8l56 0 0 288L8 400c-4.4 0-8 3.6-8 8s3.6 8 8 8l56 0 0 56c0 4.4 3.6 8 8 8s8-3.6 8-8l0-56 288 0 0 56c0 4.4 3.6 8 8 8s8-3.6 8-8l0-56 56 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-56 0 0-288 56 0c4.4 0 8-3.6 8-8zM80 400l0-288 288 0 0 288L80 400z" />
    </Icon>
);

export default Frame;