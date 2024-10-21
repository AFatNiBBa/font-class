
import { Icon } from "../../index";

/**
 * A component that renders the `manat-sign` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/manat-sign?s=sharp-regular manat-sign}
 * @preview ![manat-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/manat-sign.svg)
 */
const ManatSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M216 32l-48 0 0 65.5C73.3 109.3 0 190.1 0 288L0 456l0 24 48 0 0-24 0-168c0-71.4 51.9-130.6 120-142l0 334 48 0 0-334c68.1 11.4 120 70.7 120 142l0 168 0 24 48 0 0-24 0-168c0-97.9-73.3-178.7-168-190.5L216 32z" />
    </Icon>
);

export default ManatSign;