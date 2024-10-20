
import { Icon, generic } from "../../index";

/**
 * A component that renders the `browsers` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/browsers?s=sharp-duotone-solid browsers}
 * @preview ![browsers](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/browsers.svg)
 */
const Browsers: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 192l0 224 480 0 0-224L96 192zM160 64l0 64 64 0 0-64-64 0z" />
        <path d="M576 0L96 0l0 192 480 0L576 0zM224 64l0 64-64 0 0-64 64 0zm32 8l256 0 0 48-256 0 0-48zM48 120l0-24L0 96l0 24L0 488l0 24 24 0 432 0 24 0 0-48-24 0L48 464l0-344z" />
    </Icon>
);

export default Browsers;