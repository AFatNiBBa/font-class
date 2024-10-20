
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diagram-project` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-project?s=sharp-duotone-solid diagram-project}
 * @preview ![diagram-project](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/diagram-project.svg)
 */
const DiagramProject: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M144 224l48 0 0-42.7L272 288l-48 0 0 42.7L144 224zM192 96l192 0 0 64-192 0 0-64z" />
        <path d="M0 32l192 0 0 192L0 224 0 32zM224 288l192 0 0 192-192 0 0-192zM576 32l0 192-192 0 0-192 192 0z" />
    </Icon>
);

export default DiagramProject;