
import { Icon } from "../../index";

/**
 * A component that renders the `copyright` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/copyright?s=sharp-light copyright}
 * @preview ![copyright](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/copyright.svg)
 */
const Copyright: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 256c0-53 43-96 96-96c31.4 0 59.3 15.1 76.8 38.5l25.6-19.2C335.1 148.2 297.9 128 256 128c-70.7 0-128 57.3-128 128s57.3 128 128 128c41.9 0 79.1-20.2 102.4-51.3l-25.6-19.2C315.3 336.9 287.4 352 256 352c-53 0-96-43-96-96z" />
    </Icon>
);

export default Copyright;