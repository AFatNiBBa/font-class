
import { Icon } from "../../index";

/**
 * A component that renders the `window-frame` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-frame?s=thin window-frame}
 * @preview ![window-frame](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/window-frame.svg)
 */
const WindowFrame: typeof Icon = x => (
    <Icon {...x}>
        <path d="M248 256l0 240L48 496l0-240 200 0zm16 240l0-240 200 0 0 240-200 0zm216 0l0-432c0-35.3-28.7-64-64-64L96 0C60.7 0 32 28.7 32 64l0 432L8 496c-4.4 0-8 3.6-8 8s3.6 8 8 8l24 0 16 0 416 0 16 0 24 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-24 0zM464 240l-200 0 0-224 152 0c26.5 0 48 21.5 48 48l0 176zM96 16l152 0 0 224L48 240 48 64c0-26.5 21.5-48 48-48z" />
    </Icon>
);

export default WindowFrame;