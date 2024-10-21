
import { Icon } from "../../index";

/**
 * A component that renders the `custard` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/custard?s=sharp-solid custard}
 * @preview ![custard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/custard.svg)
 */
const Custard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M448 64l25.9 116.5-69.5-19.9-4.4-1.3-4.4 1.3L288 191.4 180.4 160.6l-4.4-1.3-4.4 1.3-69.5 19.9L128 64l320 0zM64.3 350.9L94.2 216 176 192.6l107.6 30.7 4.4 1.3 4.4-1.3L400 192.6 481.8 216 512 352 64.3 350.9zM32 384l512 0 32 0 0 64-32 0L32 448 0 448l0-64 32 0z" />
    </Icon>
);

export default Custard;