
import { Icon } from "../../index";

/**
 * A component that renders the `rhombus` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rhombus?s=thin rhombus}
 * @preview ![rhombus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/rhombus.svg)
 */
const Rhombus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M242.3 24.4C237.7 19.1 231 16 224 16s-13.7 3.1-18.3 8.4l-184 216c-7.6 9-7.6 22.2 0 31.1l184 216c4.6 5.4 11.2 8.4 18.3 8.4s13.7-3.1 18.3-8.4l184-216c7.6-9 7.6-22.2 0-31.1l-184-216zM224 0c11.7 0 22.8 5.1 30.4 14.1l184 216c12.7 14.9 12.7 36.9 0 51.9l-184 216c-7.6 8.9-18.7 14.1-30.4 14.1s-22.8-5.1-30.4-14.1l-184-216C-3.2 267-3.2 245 9.6 230.1l184-216C201.2 5.1 212.3 0 224 0z" />
    </Icon>
);

export default Rhombus;