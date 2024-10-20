
import { Icon, generic } from "../../index";

/**
 * A component that renders the `window-maximize` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-maximize?s=sharp-duotone-solid window-maximize}
 * @preview ![window-maximize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/window-maximize.svg)
 */
const WindowMaximize: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 96l384 0 0 64L64 160l0-64z" />
        <path d="M0 480l512 0 0-448L0 32 0 480zM448 96l0 64L64 160l0-64 384 0z" />
    </Icon>
);

export default WindowMaximize;