
import { Icon, generic } from "../../index";

/**
 * A component that renders the `baht-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/baht-sign?s=sharp-duotone-solid baht-sign}
 * @preview ![baht-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/baht-sign.svg)
 */
const BahtSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M112 0l0 64 64 0 0-64L112 0zm0 128l0 96 64 0 0-96-64 0zm0 160l0 96 64 0 0-96-64 0zm0 160l0 64 64 0 0-64-64 0z" />
        <path d="M64 128l0 96 112 0c26.5 0 48-21.5 48-48s-21.5-48-48-48L64 128zM0 224l0-96L0 64l64 0 112 0c61.9 0 112 50.1 112 112c0 24.2-7.7 46.6-20.7 64.9c31.7 19.8 52.7 55 52.7 95.1c0 61.9-50.1 112-112 112L64 448 0 448l0-64 0-96 0-64zm176 64L64 288l0 96 144 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-32 0z" />
    </Icon>
);

export default BahtSign;