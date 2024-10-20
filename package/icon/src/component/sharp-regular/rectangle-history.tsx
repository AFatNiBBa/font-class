
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-history` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-history?s=sharp-regular rectangle-history}
 * @preview ![rectangle-history](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/rectangle-history.svg)
 */
const RectangleHistory: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 208L48 208l0 256 416 0 0-256zm48-48l0 48 0 256 0 48-48 0L48 512 0 512l0-48L0 208l0-48 48 0 416 0 48 0zM464 80l0 48L48 128l0-48 416 0zM416 0l0 48L96 48 96 0 416 0z" />
    </Icon>
);

export default RectangleHistory;