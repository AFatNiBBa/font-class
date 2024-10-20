
import { Icon } from "../../index";

/**
 * A component that renders the `paper-plane` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paper-plane?s=sharp-thin paper-plane}
 * @preview ![paper-plane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/paper-plane.svg)
 */
const PaperPlane: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 288l18.5 7.9L192 370.3s0 0 0 0l0 13.7 0 40 0 72 48 16 52.4-98.7L277.7 407l-45.4 85.5L208 484.5l0-60.5 0-40 0-6.9s0 0 0 0l16 6.9 208.7 89.5L448 480l2.2-16.5L509.4 19.8 512 0 494.6 9.8 17.6 278.1 0 288zm215 74.7L490.9 37.3 434.9 457 230.3 369.3 215 362.7zM462.2 46.4L199.6 356.1 36.1 286.1 462.2 46.4z" />
    </Icon>
);

export default PaperPlane;