
import { Icon } from "../../index";

/**
 * A component that renders the `loader` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/loader?s=thin loader}
 * @preview ![loader](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/loader.svg)
 */
const Loader: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 8l0 88c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-88c0-4.4 3.6-8 8-8s8 3.6 8 8zm0 408l0 88c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-88c0-4.4 3.6-8 8-8s8 3.6 8 8zM0 256c0-4.4 3.6-8 8-8l88 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 264c-4.4 0-8-3.6-8-8zm416-8l88 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-88 0c-4.4 0-8-3.6-8-8s3.6-8 8-8zM435.8 77.8c3.1 3.1 3.1 8.2 0 11.3l-62.2 62.2c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l62.2-62.2c3.1-3.1 8.2-3.1 11.3 0zM147.3 377.6L85.1 439.8c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L136 366.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3zM68.2 72.2c3.1-3.1 8.2-3.1 11.3 0L147.3 140c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L68.2 83.5c-3.1-3.1-3.1-8.2 0-11.3zM373.6 366.3l62.2 62.2c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-62.2-62.2c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0z" />
    </Icon>
);

export default Loader;