
import { Icon } from "../../index";

/**
 * A component that renders the `function` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/function?s=sharp-regular function}
 * @preview ![function](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/function.svg)
 */
const Function: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M72 0L96 0 200 0l24 0 0 48-24 0-80 0 0 144 48 0 24 0 0 48-24 0-48 0 0 216 0 24-24 0-72 0L0 480l0-48 24 0 48 0 0-192-48 0L0 240l0-48 24 0 48 0L72 24 72 0zM272 320c0 57.5 16.4 110.9 44.3 155.2l-40.6 25.6C243 448.9 224 386.7 224 320s19-128.9 51.7-180.8l40.6 25.6C288.4 209.1 272 262.5 272 320zm320 0c0-57.5-16.4-110.9-44.3-155.2l40.6-25.6C621 191.1 640 253.3 640 320s-19 128.9-51.7 180.8l-40.6-25.6C575.6 430.9 592 377.5 592 320zM393 247l39 39 39-39 17-17L521.9 264l-17 17-39 39 39 39 17 17L488 409.9l-17-17-39-39-39 39-17 17L342.1 376l17-17 39-39-39-39-17-17L376 230.1l17 17z" />
    </Icon>
);

export default Function;