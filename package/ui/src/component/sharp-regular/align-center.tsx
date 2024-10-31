
import { Icon } from "../../index";

/**
 * A component that renders the `align-center` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-center?s=sharp-regular align-center}
 * @preview ![align-center](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/align-center.svg)
 */
const AlignCenter: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M120 40L96 40l0 48 24 0 208 0 24 0 0-48-24 0L120 40zM24 168L0 168l0 48 24 0 400 0 24 0 0-48-24 0L24 168zM96 296l0 48 24 0 208 0 24 0 0-48-24 0-208 0-24 0zM24 424L0 424l0 48 24 0 400 0 24 0 0-48-24 0L24 424z" />
    </Icon>
);

export default AlignCenter;