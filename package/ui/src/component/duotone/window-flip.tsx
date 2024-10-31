
import { Icon, generic } from "../../index";

/**
 * A component that renders the `window-flip` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-flip?s=duotone window-flip}
 * @preview ![window-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/window-flip.svg)
 */
const WindowFlip: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224l512 0 0 192c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 224zm352-96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm96 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M448 32c35.3 0 64 28.7 64 64l0 128L0 224 0 96C0 60.7 28.7 32 64 32l384 0zM416 160a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 128a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm-64 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default WindowFlip;