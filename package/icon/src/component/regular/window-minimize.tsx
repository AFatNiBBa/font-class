
import { Icon } from "../../index";

/**
 * A component that renders the `window-minimize` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-minimize?s=regular window-minimize}
 * @preview ![window-minimize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/window-minimize.svg)
 */
const WindowMinimize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M24 432c-13.3 0-24 10.7-24 24s10.7 24 24 24l464 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 432z" />
    </Icon>
);

export default WindowMinimize;