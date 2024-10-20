
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tombstone-blank` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tombstone-blank?s=sharp-duotone-solid tombstone-blank}
 * @preview ![tombstone-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tombstone-blank.svg)
 */
const TombstoneBlank: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 192C32 86 118 0 224 0S416 86 416 192l0 256L32 448l0-256z" />
        <path d="M0 448l448 0 0 64L0 512l0-64z" />
    </Icon>
);

export default TombstoneBlank;