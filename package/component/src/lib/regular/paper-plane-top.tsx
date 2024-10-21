
import { Icon } from "../../index";

/**
 * A component that renders the `paper-plane-top` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paper-plane-top?s=regular paper-plane-top}
 * @preview ![paper-plane-top](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/paper-plane-top.svg)
 */
const PaperPlaneTop: typeof Icon = x => (
    <Icon {...x}>
        <path d="M133.9 232L65.8 95.9 383.4 232l-249.5 0zm0 48l249.5 0L65.8 416.1l68-136.1zM44.6 34.6C32.3 29.3 17.9 32.3 8.7 42S-2.6 66.3 3.4 78.3L92.2 256 3.4 433.7c-6 12-3.9 26.5 5.3 36.3s23.5 12.7 35.9 7.5l448-192c11.8-5 19.4-16.6 19.4-29.4s-7.6-24.4-19.4-29.4l-448-192z" />
    </Icon>
);

export default PaperPlaneTop;