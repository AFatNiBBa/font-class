
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-subtask` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-subtask?s=sharp-solid diagram-subtask}
 * @preview ![diagram-subtask](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/diagram-subtask.svg)
 */
const DiagramSubtask: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l512 0 0 192-352 0 0 128 64 0 0-64 64 0 160 0 64 0 0 64 0 64 0 64-64 0-160 0-64 0 0-64-96 0-32 0 0-32 0-160L0 224 0 32zM448 352l-160 0 0 64 160 0 0-64z" />
    </Icon>
);

export default DiagramSubtask;