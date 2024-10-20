
import { Icon } from "../../index";

/**
 * A component that renders the `exclamation` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/exclamation?s=sharp-solid exclamation}
 * @preview ![exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/exclamation.svg)
 */
const Exclamation: typeof Icon = x => (
    <Icon viewBox="0 0 128 512" {...x}>
        <path d="M96 64l0-32L32 32l0 32 0 256 0 32 64 0 0-32L96 64zm0 352l-64 0 0 64 64 0 0-64z" />
    </Icon>
);

export default Exclamation;