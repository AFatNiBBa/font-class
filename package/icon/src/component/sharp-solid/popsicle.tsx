
import { Icon } from "../../index";

/**
 * A component that renders the `popsicle` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/popsicle?s=sharp-solid popsicle}
 * @preview ![popsicle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/popsicle.svg)
 */
const Popsicle: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M160 0C71.6 0 0 71.6 0 160L0 384l320 0 0-224C320 71.6 248.4 0 160 0zm32 512l0-96-64 0 0 96 64 0z" />
    </Icon>
);

export default Popsicle;