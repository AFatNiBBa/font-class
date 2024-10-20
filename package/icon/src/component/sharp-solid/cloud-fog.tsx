
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-fog` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-fog?s=sharp-solid cloud-fog}
 * @preview ![cloud-fog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cloud-fog.svg)
 */
const CloudFog: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M160 320l-96 0 0-96c0-41.8 26.7-77.4 64-90.5l0-21.5C128 50.1 178.1 0 240 0c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80l0 16c53 0 96 43 96 96l0 96-96 0-320 0zM0 368l24 0 528 0 24 0 0 48-24 0L24 416 0 416l0-48zm64 96l24 0 112 0 24 0 0 48-24 0L88 512l-24 0 0-48zm208 0l24 0 320 0 24 0 0 48-24 0-320 0-24 0 0-48z" />
    </Icon>
);

export default CloudFog;