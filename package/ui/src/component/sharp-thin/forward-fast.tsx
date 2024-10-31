
import { Icon } from "../../index";

/**
 * A component that renders the `forward-fast` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forward-fast?s=sharp-thin forward-fast}
 * @preview ![forward-fast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/forward-fast.svg)
 */
const ForwardFast: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 64l0 8 0 172.7L256 75.3 240 64l0 19.6 0 149.8L16 75.3 0 64 0 83.6 0 428.4 0 448l16-11.3L240 278.6l0 149.8 0 19.6 16-11.3L496 267.3 496 440l0 8 16 0 0-8 0-184 0-184 0-8-16 0zM256 267.3l0-22.6 0-149.8L484.3 256 256 417.1l0-149.8zM240 259L16 417.1 16 94.9 240 253l0 6z" />
    </Icon>
);

export default ForwardFast;