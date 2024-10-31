
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-previous` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-previous?s=sharp-regular diagram-previous}
 * @preview ![diagram-previous](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/diagram-previous.svg)
 */
const DiagramPrevious: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 336L48 336l0 96 416 0 0-96zm48-48l0 48 0 96 0 48-48 0L48 480 0 480l0-48 0-96 0-48 48 0 184 0 0-86.1-23 23-17 17L158.1 208l17-17 64-64 17-17 17 17 64 64 17 17L320 241.9l-17-17-23-23 0 86.1 184 0 48 0zM96.8 224L0 224 0 32l512 0 0 192-96.8 0-39.6-39.6-80-80L256 64.8l-39.6 39.6-80 80L96.8 224z" />
    </Icon>
);

export default DiagramPrevious;