
import { Icon } from "../../index";

/**
 * A component that renders the `tablet` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet?s=sharp-light tablet}
 * @preview ![tablet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/tablet.svg)
 */
const Tablet: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 32l0 448 384 0 0-448L32 32zM0 0L32 0 416 0l32 0 0 32 0 448 0 32-32 0L32 512 0 512l0-32L0 32 0 0zM192 400l64 0 16 0 0 32-16 0-64 0-16 0 0-32 16 0z" />
    </Icon>
);

export default Tablet;