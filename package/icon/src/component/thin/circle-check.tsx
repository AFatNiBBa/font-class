
import { Icon } from "../../index";

/**
 * A component that renders the `circle-check` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-check?s=thin circle-check}
 * @preview ![circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-check.svg)
 */
const CircleCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM357.7 197.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L224 308.7l-58.3-58.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l64 64c3.1 3.1 8.2 3.1 11.3 0l128-128z" />
    </Icon>
);

export default CircleCheck;