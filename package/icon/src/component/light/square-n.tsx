
import { Icon } from "../../index";

/**
 * A component that renders the `square-n` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-n?s=light square-n}
 * @preview ![square-n](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-n.svg)
 */
const SquareN: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm157 38.7L288 318.1 288 144c0-8.8 7.2-16 16-16s16 7.2 16 16l0 224c0 7-4.5 13.1-11.1 15.2s-13.9-.3-17.9-5.9L160 193.9 160 368c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-224c0-7 4.5-13.1 11.1-15.2s13.9 .3 17.9 5.9z" />
    </Icon>
);

export default SquareN;