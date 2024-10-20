
import { Icon } from "../../index";

/**
 * A component that renders the `deezer` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/deezer?s=brands deezer}
 * @preview ![deezer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/deezer.svg)
 */
const Deezer: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M451.46,244.71H576V172H451.46Zm0-173.89v72.67H576V70.82Zm0,275.06H576V273.2H451.46ZM0,447.09H124.54V374.42H0Zm150.47,0H275V374.42H150.47Zm150.52,0H425.53V374.42H301Zm150.47,0H576V374.42H451.46ZM301,345.88H425.53V273.2H301Zm-150.52,0H275V273.2H150.47Zm0-101.17H275V172H150.47Z" />
    </Icon>
);

export default Deezer;