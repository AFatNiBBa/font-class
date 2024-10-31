
import { Icon } from "../../index";

/**
 * A component that renders the `compact-disc` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compact-disc?s=sharp-regular compact-disc}
 * @preview ![compact-disc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/compact-disc.svg)
 */
const CompactDisc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384l0-32C167.6 96 96 167.6 96 256l32 0c0-70.7 57.3-128 128-128zm96 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zm-120 0a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default CompactDisc;