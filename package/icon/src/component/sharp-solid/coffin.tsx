
import { Icon } from "../../index";

/**
 * A component that renders the `coffin` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coffin?s=sharp-solid coffin}
 * @preview ![coffin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/coffin.svg)
 */
const Coffin: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 144L104 512H280L384 144 272 0H112L0 144z" />
    </Icon>
);

export default Coffin;