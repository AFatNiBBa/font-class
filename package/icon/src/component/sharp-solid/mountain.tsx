
import { Icon } from "../../index";

/**
 * A component that renders the `mountain` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mountain?s=sharp-solid mountain}
 * @preview ![mountain](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/mountain.svg)
 */
const Mountain: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 416l0 64 64 0 384 0 64 0 0-64L294.5 89.7 256 32 217.5 89.7 0 416zM307.1 224L256 224l-48 64-24.2-32.3L256 147.4 307.1 224z" />
    </Icon>
);

export default Mountain;