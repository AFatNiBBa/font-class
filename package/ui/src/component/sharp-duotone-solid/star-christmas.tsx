
import { Icon, generic } from "../../index";

/**
 * A component that renders the `star-christmas` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-christmas?s=sharp-duotone-solid star-christmas}
 * @preview ![star-christmas](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/star-christmas.svg)
 */
const StarChristmas: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M54.1 88l17 17 48 48 17 17L169.9 136l-17-17L105 71l-17-17L54.1 88zm0 336L88 457.9l17-17 48-48 17-17L136 342.1l-17 17L71 407l-17 17zm288-288L376 169.9l17-17 48-48 17-17L424 54.1 407 71l-48 48-17 17zm0 240l17 17 48 48 17 17L457.9 424l-17-17-48-48-17-17L342.1 376z" />
        <path d="M192 320L0 256l192-64L256 0l64 192 192 64L320 320 256 512 192 320z" />
    </Icon>
);

export default StarChristmas;