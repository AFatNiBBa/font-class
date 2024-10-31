
import { Icon } from "../../index";

/**
 * A component that renders the `frame` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/frame?s=regular frame}
 * @preview ![frame](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/frame.svg)
 */
const Frame: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 120c0-13.3-10.7-24-24-24l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L112 96l0-40c0-13.3-10.7-24-24-24S64 42.7 64 56l0 40L24 96C10.7 96 0 106.7 0 120s10.7 24 24 24l40 0 0 224-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 224 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-224 40 0c13.3 0 24-10.7 24-24zM112 368l0-224 224 0 0 224-224 0z" />
    </Icon>
);

export default Frame;