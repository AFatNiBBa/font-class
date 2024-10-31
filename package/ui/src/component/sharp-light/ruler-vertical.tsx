
import { Icon } from "../../index";

/**
 * A component that renders the `ruler-vertical` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-vertical?s=sharp-light ruler-vertical}
 * @preview ![ruler-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/ruler-vertical.svg)
 */
const RulerVertical: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M224 32l0 64-64 0-16 0 0 32 16 0 64 0 0 64-64 0-16 0 0 32 16 0 64 0 0 64-64 0-16 0 0 32 16 0 64 0 0 64-64 0-16 0 0 32 16 0 64 0 0 64L32 480 32 32l192 0zM32 0L0 0 0 32 0 480l0 32 32 0 192 0 32 0 0-32 0-448 0-32L224 0 32 0z" />
    </Icon>
);

export default RulerVertical;