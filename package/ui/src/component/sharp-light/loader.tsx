
import { Icon } from "../../index";

/**
 * A component that renders the `loader` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/loader?s=sharp-light loader}
 * @preview ![loader](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/loader.svg)
 */
const Loader: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 16l0 96 0 16-32 0 0-16 0-96 0-16 32 0 0 16zm0 384l0 96 0 16-32 0 0-16 0-96 0-16 32 0 0 16zM0 240l16 0 96 0 16 0 0 32-16 0-96 0L0 272l0-32zm400 0l96 0 16 0 0 32-16 0-96 0-16 0 0-32 16 0zM448.3 86.3L437 97.6l-67.9 67.9-11.3 11.3-22.6-22.6 11.3-11.3L414.4 75l11.3-11.3 22.6 22.6zM165.5 369.1L97.6 437 86.3 448.3 63.7 425.7 75 414.4l67.9-67.9 11.3-11.3 22.6 22.6-11.3 11.3zM86.3 63.7L97.6 75l67.9 67.9 11.3 11.3-22.6 22.6-11.3-11.3L75 97.6 63.7 86.3 86.3 63.7zM369.1 346.5L437 414.4l11.3 11.3-22.6 22.6L414.4 437l-67.9-67.9-11.3-11.3 22.6-22.6 11.3 11.3z" />
    </Icon>
);

export default Loader;