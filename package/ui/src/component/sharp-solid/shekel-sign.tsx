
import { Icon } from "../../index";

/**
 * A component that renders the `shekel-sign` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shekel-sign?s=sharp-solid shekel-sign}
 * @preview ![shekel-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/shekel-sign.svg)
 */
const ShekelSign: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 32L0 32 0 64 0 480l64 0L64 96l128 0c35.3 0 64 28.7 64 64l0 192 64 0 0-192c0-70.7-57.3-128-128-128L32 32zM320 480c70.7 0 128-57.3 128-128l0-320-64 0 0 320c0 35.3-28.7 64-64 64l-128 0 0-256-64 0 0 288 0 32 32 0 160 0z" />
    </Icon>
);

export default ShekelSign;