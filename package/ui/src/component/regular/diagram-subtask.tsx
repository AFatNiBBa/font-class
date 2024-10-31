
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-subtask` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-subtask?s=regular diagram-subtask}
 * @preview ![diagram-subtask](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/diagram-subtask.svg)
 */
const DiagramSubtask: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-296 0 0 96c0 22.1 17.9 40 40 40l32 0 0-8c0-35.3 28.7-64 64-64l160 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-160 0c-35.3 0-64-28.7-64-64l0-8-32 0c-48.6 0-88-39.4-88-88l0-96-40 0c-35.3 0-64-28.7-64-64L0 96zM448 336l-160 0c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16z" />
    </Icon>
);

export default DiagramSubtask;