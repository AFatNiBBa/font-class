
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-subtask` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-subtask?s=sharp-light diagram-subtask}
 * @preview ![diagram-subtask](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/diagram-subtask.svg)
 */
const DiagramSubtask: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 64l0 128-336 0-32 0-80 0L32 64l448 0zM144 224l336 0 32 0 0-32 0-128 0-32-32 0L32 32 0 32 0 64 0 192l0 32 32 0 80 0 0 160 0 16 16 0 96 0 0 48 0 32 32 0 224 0 32 0 0-32 0-128 0-32-32 0-224 0-32 0 0 32 0 48-80 0 0-144zm336 96l0 128-224 0 0-128 224 0z" />
    </Icon>
);

export default DiagramSubtask;