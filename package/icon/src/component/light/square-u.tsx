
import { Icon } from "../../index";

/**
 * A component that renders the `square-u` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-u?s=light square-u}
 * @preview ![square-u](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-u.svg)
 */
const SquareU: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm144 64l0 128c0 44.2 35.8 80 80 80s80-35.8 80-80l0-128c0-8.8 7.2-16 16-16s16 7.2 16 16l0 128c0 61.9-50.1 112-112 112s-112-50.1-112-112l0-128c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </Icon>
);

export default SquareU;