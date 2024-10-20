
import { Icon } from "../../index";

/**
 * A component that renders the `window-frame` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-frame?s=sharp-thin window-frame}
 * @preview ![window-frame](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/window-frame.svg)
 */
const WindowFrame: typeof Icon = x => (
    <Icon {...x}>
        <path d="M248 256l0 240L48 496l0-240 200 0zm16 240l0-240 200 0 0 240-200 0zm216 0l0-480 0-16L464 0 48 0 32 0l0 16 0 480L8 496l-8 0 0 16 8 0 24 0 16 0 416 0 16 0 24 0 8 0 0-16-8 0-24 0zM464 240l-200 0 0-224 200 0 0 224zM48 16l200 0 0 224L48 240 48 16z" />
    </Icon>
);

export default WindowFrame;