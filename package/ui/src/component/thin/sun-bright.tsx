
import { Icon } from "../../index";

/**
 * A component that renders the `sun-bright` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sun-bright?s=thin sun-bright}
 * @preview ![sun-bright](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/sun-bright.svg)
 */
const SunBright: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0c4.4 0 8 3.6 8 8l0 96c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-96c0-4.4 3.6-8 8-8zM0 256c0-4.4 3.6-8 8-8l96 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 264c-4.4 0-8-3.6-8-8zm400 0c0-4.4 3.6-8 8-8l96 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-96 0c-4.4 0-8-3.6-8-8zM256 400c4.4 0 8 3.6 8 8l0 96c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-96c0-4.4 3.6-8 8-8zM75 75c3.1-3.1 8.2-3.1 11.3 0l67.9 67.9c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L75 86.3c-3.1-3.1-3.1-8.2 0-11.3zm0 362c-3.1-3.1-3.1-8.2 0-11.3l67.9-67.9c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L86.3 437c-3.1 3.1-8.2 3.1-11.3 0zM357.8 154.2c-3.1-3.1-3.1-8.2 0-11.3L425.7 75c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-67.9 67.9c-3.1 3.1-8.2 3.1-11.3 0zm0 203.6c3.1-3.1 8.2-3.1 11.3 0L437 425.7c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-67.9-67.9c-3.1-3.1-3.1-8.2 0-11.3zM360 256a104 104 0 1 0 -208 0 104 104 0 1 0 208 0zm-224 0a120 120 0 1 1 240 0 120 120 0 1 1 -240 0z" />
    </Icon>
);

export default SunBright;