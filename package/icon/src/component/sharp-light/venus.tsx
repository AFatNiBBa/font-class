
import { Icon } from "../../index";

/**
 * A component that renders the `venus` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/venus?s=sharp-light venus}
 * @preview ![venus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/venus.svg)
 */
const Venus: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 176a144 144 0 1 1 288 0A144 144 0 1 1 48 176zM208 351.3c89.7-8.1 160-83.5 160-175.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 91.8 70.3 167.2 160 175.3l0 64.7-64 0-16 0 0 32 16 0 64 0 0 48 0 16 32 0 0-16 0-48 64 0 16 0 0-32-16 0-64 0 0-64.7z" />
    </Icon>
);

export default Venus;