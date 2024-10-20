
import { Icon } from "../../index";

/**
 * A component that renders the `window-minimize` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-minimize?s=thin window-minimize}
 * @preview ![window-minimize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/window-minimize.svg)
 */
const WindowMinimize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M8 464c-4.4 0-8 3.6-8 8s3.6 8 8 8l496 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L8 464z" />
    </Icon>
);

export default WindowMinimize;