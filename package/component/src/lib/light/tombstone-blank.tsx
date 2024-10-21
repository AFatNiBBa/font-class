
import { Icon } from "../../index";

/**
 * A component that renders the `tombstone-blank` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tombstone-blank?s=light tombstone-blank}
 * @preview ![tombstone-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/tombstone-blank.svg)
 */
const TombstoneBlank: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 192l0 256 32 0 0-256C416 86 330 0 224 0S32 86 32 192l0 256 32 0 0-256c0-88.4 71.6-160 160-160s160 71.6 160 160zM16 480c-8.8 0-16 7.2-16 16s7.2 16 16 16l416 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L16 480z" />
    </Icon>
);

export default TombstoneBlank;