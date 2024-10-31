
import { Icon } from "../../index";

/**
 * A component that renders the `rhombus` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rhombus?s=regular rhombus}
 * @preview ![rhombus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/rhombus.svg)
 */
const Rhombus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 52.3L50.5 256 224 459.7 397.5 256 224 52.3zM9.6 230.1l184-216C201.2 5.1 212.3 0 224 0s22.8 5.1 30.4 14.1l184 216c12.7 14.9 12.7 36.9 0 51.9l-184 216c-7.6 8.9-18.7 14.1-30.4 14.1s-22.8-5.1-30.4-14.1l-184-216C-3.2 267-3.2 245 9.6 230.1z" />
    </Icon>
);

export default Rhombus;