
import { Icon } from "../../index";

/**
 * A component that renders the `paper-plane` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paper-plane?s=sharp-light paper-plane}
 * @preview ![paper-plane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/paper-plane.svg)
 */
const PaperPlane: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 288l37 15.9 155 66.4s0 0 0 0l0 45.7 0 72 64 24 55.7-90.4-29.7-12.7-39.4 64-18.6-7 0-49.8 0-32s0 0 0 0l193.5 82.9L448 480l4.4-32.9L506.7 39.7 512 0 477.1 19.6 35.1 268.2 0 288zm239.4 67.8L468 87.7 421.9 434 239.4 355.8zM430.2 82.7L208.6 342.6 72.2 284.1l358-201.4z" />
    </Icon>
);

export default PaperPlane;