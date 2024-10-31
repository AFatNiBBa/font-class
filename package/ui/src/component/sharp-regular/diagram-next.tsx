
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-next` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-next?s=sharp-regular diagram-next}
 * @preview ![diagram-next](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/diagram-next.svg)
 */
const DiagramNext: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 224l0-192L0 32 0 224l232 0 0 86.1-23-23-17-17L158.1 304l17 17 64 64 17 17 17-17 64-64 17-17L320 270.1l-17 17-23 23 0-86.1 232 0zM48 288L0 288l0 48 0 96 0 48 48 0 416 0 48 0 0-48 0-96 0-48-48 0-80.8 0 16 16-32 32 96.8 0 0 96-96 0-224 0-96 0 0-96 96.8 0-32-32 16-16L48 288z" />
    </Icon>
);

export default DiagramNext;