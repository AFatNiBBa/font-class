
import { Icon } from "../../index";

/**
 * A component that renders the `divide` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/divide?s=sharp-solid divide}
 * @preview ![divide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/divide.svg)
 */
const Divide: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M176 48l0 96 96 0 0-96-96 0zm0 320l0 96 96 0 0-96-96 0zm224-80l32 0 0-64-32 0L48 224l-32 0 0 64 32 0 352 0z" />
    </Icon>
);

export default Divide;