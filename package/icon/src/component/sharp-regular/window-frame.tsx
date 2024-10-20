
import { Icon } from "../../index";

/**
 * A component that renders the `window-frame` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-frame?s=sharp-regular window-frame}
 * @preview ![window-frame](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/window-frame.svg)
 */
const WindowFrame: typeof Icon = x => (
    <Icon {...x}>
        <path d="M80 464l152 0 0-192L80 272l0 192zm-48 0L32 48 32 0 80 0 432 0l48 0 0 48 0 416 8 0 24 0 0 48-24 0-8 0-48 0L80 512l-48 0-8 0L0 512l0-48 24 0 8 0zm400 0l0-192-152 0 0 192 152 0zM80 224l152 0 0-176L80 48l0 176zm200 0l152 0 0-176L280 48l0 176z" />
    </Icon>
);

export default WindowFrame;