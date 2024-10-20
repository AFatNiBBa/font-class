
import { Icon, generic } from "../../index";

/**
 * A component that renders the `star-exclamation` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-exclamation?s=sharp-duotone-solid star-exclamation}
 * @preview ![star-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/star-exclamation.svg)
 */
const StarExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M18.9 195.6L148.1 328.5 121.7 512l166.4-81.8L454.4 512 428 328.5 557.2 195.6 374.6 164 288.1 0 201.5 164 18.9 195.6zM264 160l48 0 0 24 0 80 0 24-48 0 0-24 0-80 0-24zm0 160l48 0 0 48-48 0 0-48z" />
        <path d="M312 184l0-24-48 0 0 24 0 80 0 24 48 0 0-24 0-80zm0 136l-48 0 0 48 48 0 0-48z" />
    </Icon>
);

export default StarExclamation;