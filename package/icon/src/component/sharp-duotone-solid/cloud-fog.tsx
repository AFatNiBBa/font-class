
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-fog` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-fog?s=sharp-duotone-solid cloud-fog}
 * @preview ![cloud-fog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cloud-fog.svg)
 */
const CloudFog: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 368l0 48 24 0 528 0 24 0 0-48-24 0L24 368 0 368zm64 96l0 48 24 0 112 0 24 0 0-48-24 0L88 464l-24 0zm208 0l0 48 24 0 320 0 24 0 0-48-24 0-320 0-24 0z" />
        <path d="M64 320l96 0 320 0 96 0 0-96c0-53-43-96-96-96l0-16c0-44.2-35.8-80-80-80c-24.3 0-46.1 10.9-60.8 28C320.5 24.3 283.1 0 240 0C178.1 0 128 50.1 128 112l0 21.5C90.7 146.6 64 182.2 64 224l0 96z" />
    </Icon>
);

export default CloudFog;