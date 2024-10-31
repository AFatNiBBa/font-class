
import { Icon } from "../../index";

/**
 * A component that renders the `window-frame` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-frame?s=solid window-frame}
 * @preview ![window-frame](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/window-frame.svg)
 */
const WindowFrame: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 256L32 64C32 28.7 60.7 0 96 0L416 0c35.3 0 64 28.7 64 64l0 192 0 192c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0L96 512l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-192zm384 32l-136 0 0 160 136 0 0-160zm-184 0L96 288l0 160 136 0 0-160zm48-64l136 0 0-160L280 64l0 160zM232 64L96 64l0 160 136 0 0-160z" />
    </Icon>
);

export default WindowFrame;