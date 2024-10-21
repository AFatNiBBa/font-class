
import { Icon } from "../../index";

/**
 * A component that renders the `bug` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bug?s=sharp-regular bug}
 * @preview ![bug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bug.svg)
 */
const Bug: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0c-53 0-96 43-96 96l0 32 192 0 0-32c0-53-43-96-96-96zM73 103l-17-17L22.1 120l17 17 57 57L96 208l0 56-72 0L0 264l0 48 24 0 72 0 0 8c0 27.2 6.8 52.8 18.8 75.3L50.2 459.8l-17 17 33.9 33.9 17-17 59.7-59.7C172.7 462.5 212.3 480 256 480s83.3-17.5 112.2-45.9l59.7 59.7 17 17 33.9-33.9-17-17-64.6-64.6c12-22.4 18.8-48.1 18.8-75.3l0-8 72 0 24 0 0-48-24 0-72 0 0-56 0-14.1 57-57 17-17L456 86.1l-17 17-57 57L368 160l-224 0-14.1 0L73 103zM232 429.4c-50.3-11-88-55.8-88-109.4l0-112 224 0 0 112c0 53.6-37.7 98.4-88 109.4L280 280l0-24-48 0 0 24 0 149.4z" />
    </Icon>
);

export default Bug;