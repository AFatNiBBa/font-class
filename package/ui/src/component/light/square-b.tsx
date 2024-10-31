
import { Icon } from "../../index";

/**
 * A component that renders the `square-b` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-b?s=light square-b}
 * @preview ![square-b](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-b.svg)
 */
const SquareB: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm128 64c0-17.7 14.3-32 32-32l88 0c39.8 0 72 32.2 72 72c0 19.3-7.6 36.8-19.9 49.7C321.6 262.2 336 285.4 336 312c0 39.8-32.2 72-72 72l-104 0c-17.7 0-32-14.3-32-32l0-96 0-96zm160 40c0-22.1-17.9-40-40-40l-88 0 0 80 88 0c22.1 0 40-17.9 40-40zM160 352l104 0c22.1 0 40-17.9 40-40s-17.9-40-40-40l-16 0-88 0 0 80z" />
    </Icon>
);

export default SquareB;