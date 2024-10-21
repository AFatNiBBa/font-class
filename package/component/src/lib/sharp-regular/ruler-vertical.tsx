
import { Icon } from "../../index";

/**
 * A component that renders the `ruler-vertical` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-vertical?s=sharp-regular ruler-vertical}
 * @preview ![ruler-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/ruler-vertical.svg)
 */
const RulerVertical: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M208 48l0 48-48 0-16 0 0 32 16 0 48 0 0 64-48 0-16 0 0 32 16 0 48 0 0 64-48 0-16 0 0 32 16 0 48 0 0 64-48 0-16 0 0 32 16 0 48 0 0 48L48 464 48 48l160 0zM48 0L0 0 0 48 0 464l0 48 48 0 160 0 48 0 0-48 0-416 0-48L208 0 48 0z" />
    </Icon>
);

export default RulerVertical;