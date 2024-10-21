
import { Icon } from "../../index";

/**
 * A component that renders the `ruler-combined` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-combined?s=sharp-light ruler-combined}
 * @preview ![ruler-combined](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/ruler-combined.svg)
 */
const RulerCombined: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 288l-32 0 0-32 0-224 0-32L192 0 32 0 0 0 0 32 0 288 0 480l0 32 32 0 192 0 256 0 32 0 0-32 0-160 0-32-32 0-224 0zm128 32l0 64 0 16 32 0 0-16 0-64 64 0 0 160-256 0L32 480l0-192L32 32l160 0 0 64-64 0-16 0 0 32 16 0 64 0 0 64-64 0-16 0 0 32 16 0 64 0 0 64-64 0-16 0 0 32 16 0 64 0 0 64 0 16 32 0 0-16 0-64 64 0 0 64 0 16 32 0 0-16 0-64 64 0z" />
    </Icon>
);

export default RulerCombined;