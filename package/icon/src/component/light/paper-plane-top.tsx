
import { Icon } from "../../index";

/**
 * A component that renders the `paper-plane-top` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paper-plane-top?s=light paper-plane-top}
 * @preview ![paper-plane-top](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/paper-plane-top.svg)
 */
const PaperPlaneTop: typeof Icon = x => (
    <Icon {...x}>
        <path d="M3.4 78.3c-6-12-3.9-26.5 5.3-36.3s23.5-12.7 35.9-7.5l448 192c11.8 5 19.4 16.6 19.4 29.4s-7.6 24.4-19.4 29.4l-448 192c-12.3 5.3-26.7 2.3-35.9-7.5s-11.3-24.3-5.3-36.3L92.2 256 3.4 78.3zM120 272L32 448 442.7 272 120 272zm322.7-32L32 64l88 176 322.7 0z" />
    </Icon>
);

export default PaperPlaneTop;