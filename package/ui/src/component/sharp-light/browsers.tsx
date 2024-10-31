
import { Icon } from "../../index";

/**
 * A component that renders the `browsers` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/browsers?s=sharp-light browsers}
 * @preview ![browsers](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/browsers.svg)
 */
const Browsers: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M544 32l0 64L256 96l0-64 288 0zM128 32l96 0 0 64-96 0 0-64zm0 352l0-256 112 0 304 0 0 256-416 0zM128 0L96 0l0 32 0 352 0 32 32 0 416 0 32 0 0-32 0-352 0-32L544 0 128 0zM32 112l0-16L0 96l0 16L0 496l0 16 16 0 448 0 16 0 0-32-16 0L32 480l0-368z" />
    </Icon>
);

export default Browsers;