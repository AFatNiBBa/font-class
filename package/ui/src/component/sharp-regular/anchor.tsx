
import { Icon } from "../../index";

/**
 * A component that renders the `anchor` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/anchor?s=sharp-regular anchor}
 * @preview ![anchor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/anchor.svg)
 */
const Anchor: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 80a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 0c-44.2 0-80 35.8-80 80c0 35.9 23.7 66.3 56.3 76.4c-.2 1.2-.3 2.4-.3 3.6l0 32-48 0-24 0 0 48 24 0 48 0 0 224-144 0 0-112 72 0L96 256 0 352l72 0 0 136 0 24 24 0 192 0 192 0 24 0 0-24 0-136 72 0-96-96-96 96 72 0 0 112-144 0 0-224 48 0 24 0 0-48-24 0-48 0 0-32c0-1.2-.1-2.4-.3-3.6C344.3 146.3 368 115.9 368 80c0-44.2-35.8-80-80-80z" />
    </Icon>
);

export default Anchor;