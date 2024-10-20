
import { Icon } from "../../index";

/**
 * A component that renders the `maximize` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/maximize?s=sharp-solid maximize}
 * @preview ![maximize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/maximize.svg)
 */
const Maximize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 192l32 32 52-52 84 84-84 84L64 288 32 320l0 160 160 0 32-32-52-52 84-84 84 84-52 52 32 32 160 0 0-160-32-32-52 52-84-84 84-84 52 52 32-32 0-160L320 32 288 64l52 52-84 84-84-84 52-52L192 32 32 32l0 160z" />
    </Icon>
);

export default Maximize;