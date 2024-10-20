
import { Icon, generic } from "../../index";

/**
 * A component that renders the `receipt` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/receipt?s=sharp-duotone-solid receipt}
 * @preview ![receipt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/receipt.svg)
 */
const Receipt: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L64 48 128 0l64 48L256 0l64 48L384 0l0 512-64-48-64 48-64-48-64 48L64 464 0 512 0 0zM80 144l0 32 16 0 192 0 16 0 0-32-16 0L96 144l-16 0zm0 96l0 32 16 0 192 0 16 0 0-32-16 0L96 240l-16 0zm0 96l0 32 16 0 192 0 16 0 0-32-16 0L96 336l-16 0z" />
        <path d="M80 144l16 0 192 0 16 0 0 32-16 0L96 176l-16 0 0-32zm0 192l16 0 192 0 16 0 0 32-16 0L96 368l-16 0 0-32zm16-96l192 0 16 0 0 32-16 0L96 272l-16 0 0-32 16 0z" />
    </Icon>
);

export default Receipt;