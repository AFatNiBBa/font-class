
import { Icon } from "../../index";

/**
 * A component that renders the `siren` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/siren?s=sharp-regular siren}
 * @preview ![siren](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/siren.svg)
 */
const Siren: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M345.6 304l48.4 0L368 96 80 96 54 304l48.4 0 20-160 203.3 0 20 160zm-165.5 0l11.8-94 2.2-18-32.2 0-1.8 14-12.2 98 32.2 0zM48 384l352 0 0 48L48 432l0-48zM0 336l0 48 0 48 0 48 48 0 352 0 48 0 0-48 0-48 0-48-48 0L48 336 0 336z" />
    </Icon>
);

export default Siren;