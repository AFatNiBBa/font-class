
import { Icon } from "../../index";

/**
 * A component that renders the `brightness` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brightness?s=sharp-solid brightness}
 * @preview ![brightness](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/brightness.svg)
 */
const Brightness: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 32l0-32L224 0l0 32 0 48 0 32 64 0 0-32 0-48zM118.6 73.4L96 50.7 50.7 96l22.6 22.6 32 32L128 173.3 173.3 128l-22.6-22.6-32-32zm320 45.3L461.3 96 416 50.7 393.4 73.4l-32 32L338.7 128 384 173.3l22.6-22.6 32-32zM32 224L0 224l0 64 32 0 48 0 32 0 0-64-32 0-48 0zm448 0l-48 0-32 0 0 64 32 0 48 0 32 0 0-64-32 0zM150.6 406.6L173.3 384 128 338.7l-22.6 22.6-32 32L50.7 416 96 461.3l22.6-22.6 32-32zm256-45.3L384 338.7 338.7 384l22.6 22.6 32 32L416 461.3 461.3 416l-22.6-22.6-32-32zM288 480l0-48 0-32-64 0 0 32 0 48 0 32 64 0 0-32zM256 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z" />
    </Icon>
);

export default Brightness;