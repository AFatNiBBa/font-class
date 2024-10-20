
import { Icon, generic } from "../../index";

/**
 * A component that renders the `window` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window?s=duotone window}
 * @preview ![window](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/window.svg)
 */
const Window: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224l512 0 0 192c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 224zm224-96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm96 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M64 32C28.7 32 0 60.7 0 96L0 224l512 0 0-128c0-35.3-28.7-64-64-64L64 32zM96 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM288 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Window;