
import { Icon } from "../../index";

/**
 * A component that renders the `download` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/download?s=sharp-regular download}
 * @preview ![download](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/download.svg)
 */
const Download: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 24l0-24L232 0l0 24 0 270.1-95-95-17-17L86.1 216l17 17L239 369l17 17 17-17L409 233l17-17L392 182.1l-17 17-95 95L280 24zM128.8 304L48 304 0 304l0 48L0 464l0 48 48 0 416 0 48 0 0-48 0-112 0-48-48 0-80.8 0-48 48L464 352l0 112L48 464l0-112 128.8 0-48-48zM432 408a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Download;