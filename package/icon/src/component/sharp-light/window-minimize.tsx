
import { Icon } from "../../index";

/**
 * A component that renders the `window-minimize` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-minimize?s=sharp-light window-minimize}
 * @preview ![window-minimize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/window-minimize.svg)
 */
const WindowMinimize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 448L0 448l0 32 512 0 0-32z" />
    </Icon>
);

export default WindowMinimize;