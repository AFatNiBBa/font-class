
import { Icon } from "../../index";

/**
 * A component that renders the `tent` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tent?s=sharp-solid tent}
 * @preview ![tent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/tent.svg)
 */
const Tent: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 160L0 512H288V288L416 512H576L544 176 288 0 32 160z" />
    </Icon>
);

export default Tent;