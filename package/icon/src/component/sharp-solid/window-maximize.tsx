
import { Icon } from "../../index";

/**
 * A component that renders the `window-maximize` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-maximize?s=sharp-solid window-maximize}
 * @preview ![window-maximize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/window-maximize.svg)
 */
const WindowMaximize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 32L0 32 0 480l512 0 0-448zM448 96l0 64L64 160l0-64 384 0z" />
    </Icon>
);

export default WindowMaximize;