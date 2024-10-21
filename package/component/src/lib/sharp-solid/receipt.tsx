
import { Icon } from "../../index";

/**
 * A component that renders the `receipt` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/receipt?s=sharp-solid receipt}
 * @preview ![receipt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/receipt.svg)
 */
const Receipt: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 0L0 512l64-48 64 48 64-48 64 48 64-48 64 48L384 0 320 48 256 0 192 48 128 0 64 48 0 0zM96 144l192 0 16 0 0 32-16 0L96 176l-16 0 0-32 16 0zM80 336l16 0 192 0 16 0 0 32-16 0L96 368l-16 0 0-32zm16-96l192 0 16 0 0 32-16 0L96 272l-16 0 0-32 16 0z" />
    </Icon>
);

export default Receipt;