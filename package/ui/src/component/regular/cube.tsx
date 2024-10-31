
import { Icon } from "../../index";

/**
 * A component that renders the `cube` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cube?s=regular cube}
 * @preview ![cube](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/cube.svg)
 */
const Cube: typeof Icon = x => (
    <Icon {...x}>
        <path d="M258.8 50.7c-1.8-.7-3.8-.7-5.7 0L63.6 122.6 256 198.2l192.4-75.6L258.8 50.7zM48 377.9c0 3.3 2.1 6.3 5.2 7.5L232 453.2l0-212.9L48 168.1l0 209.8zm232 75.3l178.8-67.8c3.1-1.2 5.2-4.2 5.2-7.5l0-209.8L280 240.4l0 212.9zM236.1 5.9c12.8-4.9 26.9-4.9 39.7 0l200 75.9C497.6 90 512 110.8 512 134.1l0 243.8c0 23.3-14.4 44.1-36.1 52.4l-200 75.9c-12.8 4.9-26.9 4.9-39.7 0l-200-75.9C14.4 422 0 401.2 0 377.9L0 134.1C0 110.8 14.4 90 36.1 81.7l200-75.9z" />
    </Icon>
);

export default Cube;