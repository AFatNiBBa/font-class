
import { Icon } from "../../index";

/**
 * A component that renders the `square-v` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-v?s=light square-v}
 * @preview ![square-v](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-v.svg)
 */
const SquareV: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm126.3 56.8L224 348.2l97.7-195.4c4-7.9 13.6-11.1 21.5-7.2s11.1 13.6 7.2 21.5l-112 224c-2.7 5.4-8.3 8.8-14.3 8.8s-11.6-3.4-14.3-8.8l-112-224c-4-7.9-.7-17.5 7.2-21.5s17.5-.7 21.5 7.2z" />
    </Icon>
);

export default SquareV;