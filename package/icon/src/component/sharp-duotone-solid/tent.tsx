
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tent` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tent?s=sharp-duotone-solid tent}
 * @preview ![tent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tent.svg)
 */
const Tent: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 512l288 0 0-256L448 512l128 0L544 176 288 0 32 160 0 512z" />
        <path d="M288 256V512H448L288 256z" />
    </Icon>
);

export default Tent;