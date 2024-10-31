
import { Icon } from "../../index";

/**
 * A component that renders the `angles-up` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angles-up?s=sharp-regular angles-up}
 * @preview ![angles-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/angles-up.svg)
 */
const AnglesUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M241 47l-17-17L207 47 47 207l-17 17L64 257.9l17-17 143-143L367 241l17 17L417.9 224l-17-17L241 47zm0 192l-17-17-17 17L47 399l-17 17L64 449.9l17-17 143-143L367 433l17 17L417.9 416l-17-17L241 239z" />
    </Icon>
);

export default AnglesUp;