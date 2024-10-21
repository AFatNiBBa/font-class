
import { Icon } from "../../index";

/**
 * A component that renders the `window-frame` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-frame?s=sharp-solid window-frame}
 * @preview ![window-frame](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/window-frame.svg)
 */
const WindowFrame: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 256L32 64 32 0 96 0 416 0l64 0 0 64 0 192 0 192 32 0 0 64-32 0-64 0L96 512l-64 0L0 512l0-64 32 0 0-192zm384 32l-136 0 0 160 136 0 0-160zm-184 0L96 288l0 160 136 0 0-160zm48-64l136 0 0-160L280 64l0 160zM232 64L96 64l0 160 136 0 0-160z" />
    </Icon>
);

export default WindowFrame;