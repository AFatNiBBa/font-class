
import { Icon } from "../../index";

/**
 * A component that renders the `mug` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mug?s=solid mug}
 * @preview ![mug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/mug.svg)
 */
const Mug: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 256c0 53 43 96 96 96l192 0c53 0 96-43 96-96l0-32 32 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l-64 0L64 64zm352 64l32 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-32 0 0-128z" />
    </Icon>
);

export default Mug;