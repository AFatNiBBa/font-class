
import { Icon } from "../../index";

/**
 * A component that renders the `popsicle` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/popsicle?s=solid popsicle}
 * @preview ![popsicle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/popsicle.svg)
 */
const Popsicle: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M160 0C71.6 0 0 71.6 0 160L0 336c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-176C320 71.6 248.4 0 160 0zm32 480l0-64-64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32z" />
    </Icon>
);

export default Popsicle;