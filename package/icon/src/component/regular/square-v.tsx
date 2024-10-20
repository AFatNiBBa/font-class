
import { Icon } from "../../index";

/**
 * A component that renders the `square-v` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-v?s=regular square-v}
 * @preview ![square-v](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/square-v.svg)
 */
const SquareV: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm141.5 53.3L224 314.3l82.5-165.1c5.9-11.9 20.3-16.7 32.2-10.7s16.7 20.3 10.7 32.2l-104 208c-4.1 8.1-12.4 13.3-21.5 13.3s-17.4-5.1-21.5-13.3l-104-208c-5.9-11.9-1.1-26.3 10.7-32.2s26.3-1.1 32.2 10.7z" />
    </Icon>
);

export default SquareV;