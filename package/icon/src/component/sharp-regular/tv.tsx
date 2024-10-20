
import { Icon } from "../../index";

/**
 * A component that renders the `tv` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tv?s=sharp-regular tv}
 * @preview ![tv](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/tv.svg)
 */
const Tv: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 48l0 320 544 0 0-320L48 48zM0 0L48 0 592 0l48 0 0 48 0 320 0 48-48 0L48 416 0 416l0-48L0 48 0 0zM120 464l400 0 24 0 0 48-24 0-400 0-24 0 0-48 24 0z" />
    </Icon>
);

export default Tv;