
import { Icon } from "../../index";

/**
 * A component that renders the `minimize` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/minimize?s=sharp-solid minimize}
 * @preview ![minimize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/minimize.svg)
 */
const Minimize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 64l32-32 52 52L456 0l56 56-84 84 52 52-32 32-160 0 0-160zm0 384l0-160 160 0 32 32-52 52 84 84-56 56-84-84-52 52-32-32zm-96 32l-52-52L56 512 0 456l84-84L32 320l32-32 160 0 0 160-32 32zM224 64l0 160L64 224 32 192l52-52L0 56 56 0l84 84 52-52 32 32z" />
    </Icon>
);

export default Minimize;