
import { Icon, generic } from "../../index";

/**
 * A component that renders the `window` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window?s=sharp-duotone-solid window}
 * @preview ![window](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/window.svg)
 */
const Window: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224L0 480l512 0 0-256L0 224zM160 96l0 64 64 0 0-64-64 0zm96 0l0 64 64 0 0-64-64 0z" />
        <path d="M512 32L0 32 0 224l512 0 0-192zM128 96l0 64-64 0 0-64 64 0zm32 0l64 0 0 64-64 0 0-64zm160 0l0 64-64 0 0-64 64 0z" />
    </Icon>
);

export default Window;