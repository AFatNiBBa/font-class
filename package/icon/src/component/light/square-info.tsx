
import { Icon } from "../../index";

/**
 * A component that renders the `square-info` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-info?s=light square-info}
 * @preview ![square-info](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-info.svg)
 */
const SquareInfo: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm200 64a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm-16 64l40 0c8.8 0 16 7.2 16 16l0 112 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l32 0 0-96-24 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default SquareInfo;