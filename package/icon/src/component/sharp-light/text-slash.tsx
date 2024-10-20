
import { Icon } from "../../index";

/**
 * A component that renders the `text-slash` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text-slash?s=sharp-light text-slash}
 * @preview ![text-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/text-slash.svg)
 */
const TextSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32.4 10L19.9 .1 .1 25.3l12.6 9.9L607.8 502.2l12.6 9.9 19.8-25.2-12.6-9.9L32.4 10zM352.3 200L390.4 64l149.1 0-16 64 33 0 19-76.1 5-19.9L560 32 144 32l-4.4 0 40.5 32 177.1 0L325.1 178.5 352.3 200zM314.9 333.5L287.7 312 249.6 448 176 448l-16 0 0 32 16 0 160 0 16 0 0-32-16 0-53.1 0 32.1-114.5z" />
    </Icon>
);

export default TextSlash;