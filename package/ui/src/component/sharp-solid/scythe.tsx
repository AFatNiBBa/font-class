
import { Icon } from "../../index";

/**
 * A component that renders the `scythe` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scythe?s=sharp-solid scythe}
 * @preview ![scythe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/scythe.svg)
 */
const Scythe: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M540.7 0L499.5 192 0 192S80 0 352 0L540.7 0zm32.7 0l64 0L527.7 512l-64 0L498 352l-82 0-32 0 0-64 32 0 95.7 0L573.4 0z" />
    </Icon>
);

export default Scythe;