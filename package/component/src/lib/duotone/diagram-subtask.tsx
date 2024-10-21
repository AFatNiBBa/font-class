
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diagram-subtask` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-subtask?s=duotone diagram-subtask}
 * @preview ![diagram-subtask](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/diagram-subtask.svg)
 */
const DiagramSubtask: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 224l0 96c0 53 43 96 96 96l32 0 0-64-32 0c-17.7 0-32-14.3-32-32l0-96-64 0z" />
        <path d="M64 32C28.7 32 0 60.7 0 96l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 32zM288 288c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l160 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64l-160 0z" />
    </Icon>
);

export default DiagramSubtask;