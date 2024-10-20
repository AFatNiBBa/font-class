
import { Icon } from "../../index";

/**
 * A component that renders the `window-maximize` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-maximize?s=thin window-maximize}
 * @preview ![window-maximize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/window-maximize.svg)
 */
const WindowMaximize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 51.2C39.3 51.2 19.2 71.3 19.2 96l0 80 473.6 0 0-80c0-24.7-20.1-44.8-44.8-44.8l-384 0zM19.2 192l0 224c0 24.7 20.1 44.8 44.8 44.8l384 0c24.7 0 44.8-20.1 44.8-44.8l0-224L19.2 192zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96z" />
    </Icon>
);

export default WindowMaximize;