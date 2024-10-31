
import { Icon } from "../../index";

/**
 * A component that renders the `square-6` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-6?s=sharp-regular square-6}
 * @preview ![square-6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-6.svg)
 */
const Square_6: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 80l0 352L48 432 48 80l352 0zM48 32L0 32 0 80 0 432l0 48 48 0 352 0 48 0 0-48 0-352 0-48-48 0L48 32zM224 240a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm-96 48c0 53 43 96 96 96s96-43 96-96c0-49.2-37-89.8-84.7-95.3l44.4-48.4L294.6 128l-65.1 0-68.1 74.3c-21.4 23.4-33.3 54-33.3 85.7z" />
    </Icon>
);

export default Square_6;