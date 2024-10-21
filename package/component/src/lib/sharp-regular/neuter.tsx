
import { Icon } from "../../index";

/**
 * A component that renders the `neuter` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/neuter?s=sharp-regular neuter}
 * @preview ![neuter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/neuter.svg)
 */
const Neuter: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 176a128 128 0 1 1 256 0A128 128 0 1 1 64 176zM216 350.4c85.8-11.7 152-85.3 152-174.4C368 78.8 289.2 0 192 0S16 78.8 16 176c0 89.1 66.2 162.7 152 174.4L168 488l0 24 48 0 0-24 0-137.6z" />
    </Icon>
);

export default Neuter;