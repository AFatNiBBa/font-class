
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cube` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cube?s=duotone cube}
 * @preview ![cube](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cube.svg)
 */
const Cube: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 189.4c53.3 19 106.7 38.1 160 57.1l0 188L64 377.4l0-188zm224 57.1l160-57.1 0 188L288 434.6l0-188z" />
        <path d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6l0 242.9c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4L0 134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zM64 377.4l160 57.1 0-188L64 189.4l0 188zm224 57.1l160-57.1 0-188L288 246.6l0 188z" />
    </Icon>
);

export default Cube;