
import { Icon, generic } from "../../index";

/**
 * A component that renders the `window-minimize` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-minimize?s=sharp-duotone-solid window-minimize}
 * @preview ![window-minimize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/window-minimize.svg)
 */
const WindowMinimize: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M512 416L0 416l0 64 512 0 0-64z" />
    </Icon>
);

export default WindowMinimize;