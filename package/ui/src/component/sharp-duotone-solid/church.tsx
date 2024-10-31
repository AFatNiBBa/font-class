
import { Icon, generic } from "../../index";

/**
 * A component that renders the `church` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/church?s=sharp-duotone-solid church}
 * @preview ![church](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/church.svg)
 */
const Church: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 352L0 512l160 0 0-240L0 352zm480-80l0 240 160 0 0-160L480 272z" />
        <path d="M344 0l0 24 0 24 32 0 24 0 0 48-24 0-32 0 0 46.4L480 224l0 288-96 0 0-96c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 96-96 0 0-288 136-81.6L296 96l-32 0-24 0 0-48 24 0 32 0 0-24 0-24 48 0z" />
    </Icon>
);

export default Church;