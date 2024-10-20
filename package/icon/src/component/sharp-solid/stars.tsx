
import { Icon } from "../../index";

/**
 * A component that renders the `stars` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stars?s=sharp-solid stars}
 * @preview ![stars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/stars.svg)
 */
const Stars: typeof Icon = x => (
    <Icon {...x}>
        <path d="M356 60L336 0 316 60 256 80l60 20 20 60 20-60 60-20L356 60zM464 208l-16-48-16 48-48 16 48 16 16 48 16-48 48-16-48-16zM253.3 265.1L193.5 144 133.7 265.1 0 284.6l96.7 94.3L73.9 512l119.6-62.9L313 512 290.2 378.9l96.7-94.3L253.3 265.1z" />
    </Icon>
);

export default Stars;