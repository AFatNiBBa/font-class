
import { Icon } from "../../index";

/**
 * A component that renders the `browsers` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/browsers?s=sharp-solid browsers}
 * @preview ![browsers](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/browsers.svg)
 */
const Browsers: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 0L96 0l0 416 480 0L576 0zM512 72l0 48-256 0 0-48 256 0zM160 64l64 0 0 64-64 0 0-64zM48 120l0-24L0 96l0 24L0 488l0 24 24 0 432 0 24 0 0-48-24 0L48 464l0-344z" />
    </Icon>
);

export default Browsers;