
import { Icon } from "../../index";

/**
 * A component that renders the `window-minimize` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-minimize?s=sharp-regular window-minimize}
 * @preview ![window-minimize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/window-minimize.svg)
 */
const WindowMinimize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 432L0 432l0 48 512 0 0-48z" />
    </Icon>
);

export default WindowMinimize;