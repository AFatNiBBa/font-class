
import { Icon } from "../../index";

/**
 * A component that renders the `duck` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/duck?s=sharp-solid duck}
 * @preview ![duck](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/duck.svg)
 */
const Duck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M431.5 125.9C426.5 73.2 382 32 328 32c-57.4 0-104 46.6-104 104c0 36.8 19.1 69.2 48 87.7l0 4.9L64 288 32 256 0 256l0 32C0 394 86 480 192 480l120 0c70.7 0 128-57.3 128-128c0-36.6-15.4-69.6-40-93l0-35 16 0c53 0 96-43 96-96l-64 0-16.5-2.1zM320 136a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM308.6 295.1l31.9 1.9c-3.2 55.6-43.5 104.9-101.5 119.3c-52.4 13.1-105.3-5.8-136.4-44.5l25-20c23.2 28.9 63.3 43.6 103.7 33.5c44.7-11.2 74.9-48.9 77.3-90.1z" />
    </Icon>
);

export default Duck;