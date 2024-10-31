
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bolt-lightning` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bolt-lightning?s=sharp-duotone-solid bolt-lightning}
 * @preview ![bolt-lightning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bolt-lightning.svg)
 */
const BoltLightning: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 288L32 0H256L208 160H384v48L128 512l48-224H0z" />
    </Icon>
);

export default BoltLightning;