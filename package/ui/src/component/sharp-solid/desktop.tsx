
import { Icon } from "../../index";

/**
 * A component that renders the `desktop` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/desktop?s=sharp-solid desktop}
 * @preview ![desktop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/desktop.svg)
 */
const Desktop: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 0L0 0 0 416l240 0-10.7 32L160 448l-32 0 0 64 32 0 256 0 32 0 0-64-32 0-69.3 0L336 416l240 0L576 0zM512 64l0 224L64 288 64 64l448 0z" />
    </Icon>
);

export default Desktop;