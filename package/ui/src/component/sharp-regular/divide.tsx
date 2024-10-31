
import { Icon } from "../../index";

/**
 * A component that renders the `divide` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/divide?s=sharp-regular divide}
 * @preview ![divide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/divide.svg)
 */
const Divide: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M256 64l0 64-64 0 0-64 64 0zM432 280l-24 0L40 280l-24 0 0-48 24 0 368 0 24 0 0 48zM192 384l64 0 0 64-64 0 0-64z" />
    </Icon>
);

export default Divide;