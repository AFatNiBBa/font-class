
import { Icon } from "../../index";

/**
 * A component that renders the `colon` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/colon?s=thin colon}
 * @preview ![colon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/colon.svg)
 */
const Colon: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M144 128a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM32 128a64 64 0 1 1 128 0A64 64 0 1 1 32 128zM144 384a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM32 384a64 64 0 1 1 128 0A64 64 0 1 1 32 384z" />
    </Icon>
);

export default Colon;