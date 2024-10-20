
import { Icon } from "../../index";

/**
 * A component that renders the `window-minimize` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-minimize?s=solid window-minimize}
 * @preview ![window-minimize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/window-minimize.svg)
 */
const WindowMinimize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l448 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 416z" />
    </Icon>
);

export default WindowMinimize;