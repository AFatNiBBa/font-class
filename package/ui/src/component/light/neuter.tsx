
import { Icon } from "../../index";

/**
 * A component that renders the `neuter` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/neuter?s=light neuter}
 * @preview ![neuter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/neuter.svg)
 */
const Neuter: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 176a144 144 0 1 1 288 0A144 144 0 1 1 48 176zM208 351.3c89.7-8.1 160-83.5 160-175.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 91.8 70.3 167.2 160 175.3L176 496c0 8.8 7.2 16 16 16s16-7.2 16-16l0-144.7z" />
    </Icon>
);

export default Neuter;