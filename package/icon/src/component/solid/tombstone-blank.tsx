
import { Icon } from "../../index";

/**
 * A component that renders the `tombstone-blank` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tombstone-blank?s=solid tombstone-blank}
 * @preview ![tombstone-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/tombstone-blank.svg)
 */
const TombstoneBlank: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 0C118 0 32 86 32 192l0 224 384 0 0-224C416 86 330 0 224 0zM32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 448z" />
    </Icon>
);

export default TombstoneBlank;