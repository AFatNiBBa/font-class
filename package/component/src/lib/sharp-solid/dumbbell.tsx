
import { Icon } from "../../index";

/**
 * A component that renders the `dumbbell` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dumbbell?s=sharp-solid dumbbell}
 * @preview ![dumbbell](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/dumbbell.svg)
 */
const Dumbbell: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M192 32L96 32l0 96-64 0 0 96L0 224l0 64 32 0 0 96 64 0 0 96 96 0 0-160 0-32 0-64 0-32 0-160zm32 192l0 64 192 0 0-64-192 0zm224-32l0 32 0 64 0 32 0 160 96 0 0-96 64 0 0-96 32 0 0-64-32 0 0-96-64 0 0-96-96 0 0 160z" />
    </Icon>
);

export default Dumbbell;