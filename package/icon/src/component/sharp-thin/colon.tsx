
import { Icon } from "../../index";

/**
 * A component that renders the `colon` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/colon?s=sharp-thin colon}
 * @preview ![colon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/colon.svg)
 */
const Colon: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M48 80l0 96 96 0 0-96L48 80zM32 64l16 0 96 0 16 0 0 16 0 96 0 16-16 0-96 0-16 0 0-16 0-96 0-16zM48 336l0 96 96 0 0-96-96 0zM32 320l16 0 96 0 16 0 0 16 0 96 0 16-16 0-96 0-16 0 0-16 0-96 0-16z" />
    </Icon>
);

export default Colon;