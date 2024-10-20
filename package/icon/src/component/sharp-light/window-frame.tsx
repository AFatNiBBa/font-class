
import { Icon } from "../../index";

/**
 * A component that renders the `window-frame` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-frame?s=sharp-light window-frame}
 * @preview ![window-frame](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/window-frame.svg)
 */
const WindowFrame: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 288l0 192L64 480l0-192 176 0zm32 192l0-192 176 0 0 192-176 0zm208 0l0-448 0-32L448 0 64 0 32 0l0 32 0 448-16 0L0 480l0 32 16 0 16 0 32 0 384 0 32 0 16 0 16 0 0-32-16 0-16 0zM448 256l-176 0 0-224 176 0 0 224zM64 32l176 0 0 224L64 256 64 32z" />
    </Icon>
);

export default WindowFrame;