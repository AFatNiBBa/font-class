
import { Icon } from "../../index";

/**
 * A component that renders the `mug` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mug?s=sharp-thin mug}
 * @preview ![mug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/mug.svg)
 */
const Mug: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 80l0 352 352 0 0-144 0-16 0-192-32 0L48 80zM416 288l0 144 0 16-16 0L48 448l-16 0 0-16L32 80l0-16 16 0 320 0 32 0 16 0 48 0c61.9 0 112 50.1 112 112s-50.1 112-112 112l-48 0zm0-16l48 0c53 0 96-43 96-96s-43-96-96-96l-48 0 0 192z" />
    </Icon>
);

export default Mug;