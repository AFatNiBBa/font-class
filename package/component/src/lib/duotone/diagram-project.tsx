
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diagram-project` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-project?s=duotone diagram-project}
 * @preview ![diagram-project](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/diagram-project.svg)
 */
const DiagramProject: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M144 224c24.8 0 45.2-18.8 47.7-43L272 288c-24.8 0-45.2 18.8-47.7 43L144 224zM192 96l192 0 0 64-192 0 0-64z" />
        <path d="M0 80C0 53.5 21.5 32 48 32l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48L0 80zM224 336c0-26.5 21.5-48 48-48l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96zM432 32l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48z" />
    </Icon>
);

export default DiagramProject;