
import { Icon } from "../../index";

/**
 * A component that renders the `up-from-line` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-from-line?s=sharp-solid up-from-line}
 * @preview ![up-from-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/up-from-line.svg)
 */
const UpFromLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 192L192 32 352 192l0 32-96 0 0 160-128 0 0-160-96 0 0-32zm0 224l320 0 32 0 0 64-32 0L32 480 0 480l0-64 32 0z" />
    </Icon>
);

export default UpFromLine;