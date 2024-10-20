
import { Icon } from "../../index";

/**
 * A component that renders the `sandwich` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sandwich?s=sharp-solid sandwich}
 * @preview ![sandwich](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/sandwich.svg)
 */
const Sandwich: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 64l512 0 0 112L0 176 0 64zM320 384l96-48 32 0 64 0 0 112L0 448 0 336l192 0 32 0 96 48zM144.2 209.1L256 238.9l111.8-29.8 8-2.1 8 2 96 24 31 7.8-15.5 62.1-31-7.8-88-22-112 29.9-8.2 2.2-8.2-2.2L135.7 273l-88 22-31 7.8L1.2 240.7l31-7.8 96-24 8-2 8 2.1z" />
    </Icon>
);

export default Sandwich;