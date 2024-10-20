
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-subtask` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-subtask?s=sharp-regular diagram-subtask}
 * @preview ![diagram-subtask](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/diagram-subtask.svg)
 */
const DiagramSubtask: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l512 0 0 192-360 0 0 136 72 0 0-24 0-48 48 0 192 0 48 0 0 48 0 96 0 48-48 0-192 0-48 0 0-48 0-24-96 0-24 0 0-24 0-160L0 224 0 32zM464 336l-192 0 0 96 192 0 0-96z" />
    </Icon>
);

export default DiagramSubtask;