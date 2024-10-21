
import { Icon } from "../../index";

/**
 * A component that renders the `browsers` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/browsers?s=sharp-regular browsers}
 * @preview ![browsers](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/browsers.svg)
 */
const Browsers: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M144 368l0-240 384 0 0 240-384 0zM144 0L96 0l0 48 0 320 0 48 48 0 384 0 48 0 0-48 0-320 0-48L528 0 144 0zM48 120l0-24L0 96l0 24L0 488l0 24 24 0 432 0 24 0 0-48-24 0L48 464l0-344z" />
    </Icon>
);

export default Browsers;