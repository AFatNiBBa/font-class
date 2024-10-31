
import { Icon } from "../../index";

/**
 * A component that renders the `window-frame` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-frame?s=regular window-frame}
 * @preview ![window-frame](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/window-frame.svg)
 */
const WindowFrame: typeof Icon = x => (
    <Icon {...x}>
        <path d="M80 464l152 0 0-192L80 272l0 192zm-48 0L32 64C32 28.7 60.7 0 96 0L416 0c35.3 0 64 28.7 64 64l0 400 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0-48 0L80 512l-48 0-8 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l8 0zm400 0l0-192-152 0 0 192 152 0zM80 224l152 0 0-176L96 48c-8.8 0-16 7.2-16 16l0 160zm200 0l152 0 0-160c0-8.8-7.2-16-16-16L280 48l0 176z" />
    </Icon>
);

export default WindowFrame;