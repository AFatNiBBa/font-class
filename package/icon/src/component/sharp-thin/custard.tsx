
import { Icon } from "../../index";

/**
 * A component that renders the `custard` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/custard?s=sharp-thin custard}
 * @preview ![custard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/custard.svg)
 */
const Custard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M57.8 384L136 64l304 0 34.8 142.5s0 0 0 0l4.3 17.6s0 0 0 0l39.1 160-16.5 0L461.6 219.6l-77.3-19.3-93.8 31.3-2.5 .8-2.5-.8-93.8-31.3-77.3 19.3L74.2 384l-16.5 0zm61-181.9l71.4-17.8 2.3-.6 2.2 .7L288 215.6l93.5-31.2 2.2-.7 2.3 .6 71.3 17.8L427.4 80 148.6 80 118.7 202.1zM0 432l8 0 560 0 8 0 0 16-8 0L8 448l-8 0 0-16z" />
    </Icon>
);

export default Custard;