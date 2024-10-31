
import { Icon } from "../../index";

/**
 * A component that renders the `window-frame` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-frame?s=light window-frame}
 * @preview ![window-frame](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/window-frame.svg)
 */
const WindowFrame: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 288l0 192L64 480l0-192 176 0zm32 192l0-192 176 0 0 192-176 0zm208 0l0-416c0-35.3-28.7-64-64-64L96 0C60.7 0 32 28.7 32 64l0 416-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 32 0 384 0 32 0 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0zM448 256l-176 0 0-224 144 0c17.7 0 32 14.3 32 32l0 192zM96 32l144 0 0 224L64 256 64 64c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default WindowFrame;