
import { Icon } from "../../index";

/**
 * A component that renders the `spinner` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spinner?s=sharp-regular spinner}
 * @preview ![spinner](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/spinner.svg)
 */
const Spinner: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 0l0 64-64 0 0-64 64 0zm81.1 414.4l45.3-45.3 45.3 45.3-45.3 45.3-45.3-45.3zM224 448l64 0 0 64-64 0 0-64zM52.4 97.6L97.6 52.4l45.3 45.3L97.6 142.9 52.4 97.6zM64 224l0 64L0 288l0-64 64 0zM52.4 414.4l45.3-45.3 45.3 45.3L97.6 459.6 52.4 414.4zM512 224l0 64-64 0 0-64 64 0z" />
    </Icon>
);

export default Spinner;