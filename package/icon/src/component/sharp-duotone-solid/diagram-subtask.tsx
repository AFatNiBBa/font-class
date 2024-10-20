
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diagram-subtask` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-subtask?s=sharp-duotone-solid diagram-subtask}
 * @preview ![diagram-subtask](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/diagram-subtask.svg)
 */
const DiagramSubtask: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 224l0 160 0 32 32 0 96 0 0-64-64 0 0-128-64 0z" />
        <path d="M512 32L0 32 0 224l512 0 0-192zm0 256l-288 0 0 192 288 0 0-192z" />
    </Icon>
);

export default DiagramSubtask;