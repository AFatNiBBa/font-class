
import { Icon } from "../../index";

/**
 * A component that renders the `square-x` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-x?s=sharp-regular square-x}
 * @preview ![square-x](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-x.svg)
 */
const SquareX: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zm349.1 96L253.9 256l95.2 128-59.8 0L224 296.2 158.7 384l-59.8 0 95.2-128L98.9 128l59.8 0L224 215.8 289.3 128l59.8 0z" />
    </Icon>
);

export default SquareX;