
import { Icon, generic } from "../../index";

/**
 * A component that renders the `crown` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crown?s=sharp-duotone-solid crown}
 * @preview ![crown](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/crown.svg)
 */
const Crown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 136a40 40 0 1 0 80 0A40 40 0 1 0 0 136zM248 72a40 40 0 1 0 80-.1A40 40 0 1 0 248 72zm248 64a40 40 0 1 0 80 0 40 40 0 1 0 -80 0z" />
        <path d="M504 160L384 256 309 106c-6.1 3.8-13.3 6-21 6s-14.9-2.2-21-6L192 256 72 160c-7.2 9.5-18.5 15.8-31.3 16L96 480l384 0 55.3-304c-12.8-.2-24.1-6.5-31.3-16z" />
    </Icon>
);

export default Crown;