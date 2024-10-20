
import { Icon } from "../../index";

/**
 * A component that renders the `exclamation` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/exclamation?s=regular exclamation}
 * @preview ![exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/exclamation.svg)
 */
const Exclamation: typeof Icon = x => (
    <Icon viewBox="0 0 128 512" {...x}>
        <path d="M88 56c0-13.3-10.7-24-24-24S40 42.7 40 56l0 288c0 13.3 10.7 24 24 24s24-10.7 24-24L88 56zM64 480a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Exclamation;