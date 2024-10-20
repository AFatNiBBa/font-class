
import { Icon } from "../../index";

/**
 * A component that renders the `angles-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angles-left?s=sharp-regular angles-left}
 * @preview ![angles-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/angles-left.svg)
 */
const AnglesLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M47 239l-17 17 17 17L207 433l17 17L257.9 416l-17-17L97.9 256 241 113l17-17L224 62.1 207 79 47 239zm192 0l-17 17 17 17L399 433l17 17L449.9 416l-17-17-143-143L433 113l17-17L416 62.1 399 79 239 239z" />
    </Icon>
);

export default AnglesLeft;