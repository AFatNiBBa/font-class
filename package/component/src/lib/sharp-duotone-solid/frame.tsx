
import { Icon, generic } from "../../index";

/**
 * A component that renders the `frame` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/frame?s=sharp-duotone-solid frame}
 * @preview ![frame](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/frame.svg)
 */
const Frame: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 32l64 0 0 64 0 64 0 192-64 0 0-192 0-64 0-64zm0 384l64 0 0 64-64 0 0-64zM320 32l64 0 0 64-64 0 0-64zm0 128l64 0 0 192 0 64 0 64-64 0 0-64 0-64 0-192z" />
        <path d="M448 96l0 64-320 0 0-64 320 0zM0 96l64 0 0 64L0 160 0 96zM0 416l0-64 320 0 0 64L0 416zm448 0l-64 0 0-64 64 0 0 64z" />
    </Icon>
);

export default Frame;