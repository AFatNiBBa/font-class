
import { Icon } from "../../index";

/**
 * A component that renders the `window-maximize` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-maximize?s=sharp-thin window-maximize}
 * @preview ![window-maximize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/window-maximize.svg)
 */
const WindowMaximize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M19.2 51.2l0 124.8 473.6 0 0-124.8-473.6 0zm0 140.8l0 268.8 473.6 0 0-268.8L19.2 192zM0 32l19.2 0 473.6 0L512 32l0 19.2 0 409.6 0 19.2-19.2 0L19.2 480 0 480l0-19.2L0 51.2 0 32z" />
    </Icon>
);

export default WindowMaximize;