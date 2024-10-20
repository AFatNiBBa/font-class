
import { Icon } from "../../index";

/**
 * A component that renders the `viacoin` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/viacoin?s=brands viacoin}
 * @preview ![viacoin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/viacoin.svg)
 */
const Viacoin: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 32h-64l-80.7 192h-94.5L64 32H0l48 112H0v48h68.5l13.8 32H0v48h102.8L192 480l89.2-208H384v-48h-82.3l13.8-32H384v-48h-48l48-112zM192 336l-27-64h54l-27 64z" />
    </Icon>
);

export default Viacoin;