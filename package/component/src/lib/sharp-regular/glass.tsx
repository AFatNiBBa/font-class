
import { Icon } from "../../index";

/**
 * A component that renders the `glass` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/glass?s=sharp-regular glass}
 * @preview ![glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/glass.svg)
 */
const Glass: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M61.9 176l260.2 0L299.6 464 84.4 464 61.9 176zm-3.8-48L51.9 48l280.2 0-6.2 80L58.1 128zM40 512l304 0L380.2 48 384 0 335.9 0 48.1 0 0 0 3.8 48 40 512z" />
    </Icon>
);

export default Glass;