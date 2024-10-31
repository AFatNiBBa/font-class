
import { Icon } from "../../index";

/**
 * A component that renders the `frame` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/frame?s=solid frame}
 * @preview ![frame](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/frame.svg)
 */
const Frame: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 128c0-17.7-14.3-32-32-32l-32 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L128 96l0-32c0-17.7-14.3-32-32-32S64 46.3 64 64l0 32L32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l32 0 0 192-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 192 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-192 32 0c17.7 0 32-14.3 32-32zM128 352l0-192 192 0 0 192-192 0z" />
    </Icon>
);

export default Frame;