
import { Icon } from "../../index";

/**
 * A component that renders the `refrigerator` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/refrigerator?s=sharp-regular refrigerator}
 * @preview ![refrigerator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/refrigerator.svg)
 */
const Refrigerator: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336 48l0 112-48 0 0-40 0-24-48 0 0 24 0 40L48 160 48 48l288 0zM240 208l0 136 0 24 48 0 0-24 0-136 48 0 0 256L48 464l0-256 192 0zM48 0L0 0 0 48 0 464l0 48 48 0 288 0 48 0 0-48 0-416 0-48L336 0 48 0z" />
    </Icon>
);

export default Refrigerator;