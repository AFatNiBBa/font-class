
import { Icon } from "../../index";

/**
 * A component that renders the `square-z` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-z?s=thin square-z}
 * @preview ![square-z](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-z.svg)
 */
const SquareZ: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm128 32l192 0c3.1 0 5.9 1.8 7.2 4.5s1 6.1-1 8.5L144.6 368 320 368c4.4 0 8 3.6 8 8s-3.6 8-8 8l-192 0c-3.1 0-5.9-1.8-7.2-4.5s-1-6.1 1-8.5L303.4 144 128 144c-4.4 0-8-3.6-8-8s3.6-8 8-8z" />
    </Icon>
);

export default SquareZ;