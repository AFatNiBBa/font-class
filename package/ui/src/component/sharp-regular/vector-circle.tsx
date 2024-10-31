
import { Icon } from "../../index";

/**
 * A component that renders the `vector-circle` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vector-circle?s=sharp-regular vector-circle}
 * @preview ![vector-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/vector-circle.svg)
 */
const VectorCircle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M232 40l0 48 48 0 0-48-48 0zM192 0l40 0 48 0 40 0 0 40 0 9.6c67.8 21 121.4 74.5 142.4 142.4l9.6 0 40 0 0 40 0 48 0 40-40 0-9.6 0c-21 67.8-74.5 121.4-142.4 142.4l0 9.6 0 40-40 0-48 0-40 0 0-40 0-9.6C124.2 441.4 70.6 387.8 49.6 320L40 320 0 320l0-40 0-48 0-40 40 0 9.6 0C70.6 124.2 124.2 70.6 192 49.6l0-9.6 0-40zm0 100.6c-41.3 17-74.3 50.1-91.4 91.4l27.4 0 0 40 0 48 0 40-27.4 0c17 41.3 50.1 74.3 91.4 91.4l0-27.4 40 0 48 0 40 0 0 27.4c41.3-17 74.3-50.1 91.4-91.4L384 320l0-40 0-48 0-40 27.4 0c-17-41.3-50.1-74.3-91.4-91.4l0 27.4-40 0-48 0-40 0 0-27.4zM472 232l-48 0 0 48 48 0 0-48zM280 424l-48 0 0 48 48 0 0-48zM88 232l-48 0 0 48 48 0 0-48z" />
    </Icon>
);

export default VectorCircle;