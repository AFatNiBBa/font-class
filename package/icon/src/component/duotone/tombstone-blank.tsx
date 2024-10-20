
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tombstone-blank` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tombstone-blank?s=duotone tombstone-blank}
 * @preview ![tombstone-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tombstone-blank.svg)
 */
const TombstoneBlank: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 192C32 86 118 0 224 0S416 86 416 192l0 256L32 448l0-256z" />
        <path d="M0 480c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default TombstoneBlank;