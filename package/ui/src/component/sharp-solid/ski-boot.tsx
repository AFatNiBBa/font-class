
import { Icon } from "../../index";

/**
 * A component that renders the `ski-boot` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ski-boot?s=sharp-solid ski-boot}
 * @preview ![ski-boot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/ski-boot.svg)
 */
const SkiBoot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 272l111.7 0 48-240L96 32 48 272zm-6.4 32L0 512l512 0 0-64-32 0 0-96L326.4 288 272 288l-16 0 0-32 16 0 60.8 0 12.8-64L288 192l-16 0 0-32 16 0 64 0L384 0 320 0l-6.4 32L240 32c0 1-.1 2.1-.3 3.1l-51.2 256L185.9 304l-13.1 0L41.6 304z" />
    </Icon>
);

export default SkiBoot;