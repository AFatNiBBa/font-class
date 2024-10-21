
import { Icon } from "../../index";

/**
 * A component that renders the `square-quarters` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-quarters?s=thin square-quarters}
 * @preview ![square-quarters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-quarters.svg)
 */
const SquareQuarters: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 48c-10.4 0-20 3.3-27.8 8.9L224 244.7 411.8 56.9C404 51.3 394.4 48 384 48L64 48zM24.9 68.2C19.3 76 16 85.6 16 96l0 320c0 10.4 3.3 20 8.9 27.8L212.7 256 24.9 68.2zM36.2 455.1C44 460.7 53.6 464 64 464l320 0c10.4 0 20-3.3 27.8-8.9L224 267.3 36.2 455.1zm386.9-11.3c5.6-7.8 8.9-17.4 8.9-27.8l0-320c0-10.4-3.3-20-8.9-27.8L235.3 256 423.1 443.8zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96z" />
    </Icon>
);

export default SquareQuarters;