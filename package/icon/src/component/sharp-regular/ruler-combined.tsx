
import { Icon } from "../../index";

/**
 * A component that renders the `ruler-combined` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-combined?s=sharp-regular ruler-combined}
 * @preview ![ruler-combined](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/ruler-combined.svg)
 */
const RulerCombined: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 272l-48 0 0-48 0-176 0-48L192 0 48 0 0 0 0 48 0 272 0 464l0 48 48 0 192 0 224 0 48 0 0-48 0-144 0-48-48 0-176 0zm96 48l0 64 0 16 32 0 0-16 0-64 48 0 0 144-224 0L48 464l0-192L48 48l144 0 0 48-64 0-16 0 0 32 16 0 64 0 0 64-64 0-16 0 0 32 16 0 64 0 0 48 0 16-64 0-16 0 0 32 16 0 64 0 0 64 0 16 32 0 0-16 0-64 16 0 48 0 0 64 0 16 32 0 0-16 0-64 64 0z" />
    </Icon>
);

export default RulerCombined;