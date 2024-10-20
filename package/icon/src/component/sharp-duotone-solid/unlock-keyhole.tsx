
import { Icon, generic } from "../../index";

/**
 * A component that renders the `unlock-keyhole` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/unlock-keyhole?s=sharp-duotone-solid unlock-keyhole}
 * @preview ![unlock-keyhole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/unlock-keyhole.svg)
 */
const UnlockKeyhole: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M80 144l0 48 64 0 0-48c0-44.2 35.8-80 80-80c31.9 0 59.4 18.6 72.3 45.7l57.8-27.5C331 33.7 281.5 0 224 0C144.5 0 80 64.5 80 144z" />
        <path d="M448 192L0 192 0 512l448 0 0-320zM256 384l-64 0-32 0 0-64 32 0 64 0 32 0 0 64-32 0z" />
    </Icon>
);

export default UnlockKeyhole;