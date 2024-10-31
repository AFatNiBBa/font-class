
import { Icon } from "../../index";

/**
 * A component that renders the `object-intersect` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-intersect?s=light object-intersect}
 * @preview ![object-intersect](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/object-intersect.svg)
 */
const ObjectIntersect: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 32L64 32C46.3 32 32 46.3 32 64l0 32L0 96 0 64C0 28.7 28.7 0 64 0L96 0l0 32zm32 0l0-32 96 0 0 32-96 0zM0 128l32 0 0 96L0 224l0-96zM288 32l-32 0 0-32 32 0c35.3 0 64 28.7 64 64l0 64-32 0 0-64c0-17.7-14.3-32-32-32zm32 128l32 0 0 32 0 64 0 32c0 35.3-28.7 64-64 64l-64 0-32 0-32 0 0-32 0-64 0-32c0-35.3 28.7-64 64-64l64 0 32 0zM160 384l32 0 0 64c0 17.7 14.3 32 32 32l32 0 0 32-32 0c-35.3 0-64-28.7-64-64l0-64zm-32-32l-64 0c-35.3 0-64-28.7-64-64l0-32 32 0 0 32c0 17.7 14.3 32 32 32l64 0 0 32zM384 192l0-32 64 0c35.3 0 64 28.7 64 64l0 32-32 0 0-32c0-17.7-14.3-32-32-32l-64 0zM288 512l0-32 96 0 0 32-96 0zm160 0l-32 0 0-32 32 0c17.7 0 32-14.3 32-32l0-32 32 0 0 32c0 35.3-28.7 64-64 64zm64-128l-32 0 0-96 32 0 0 96zM224 192c-17.7 0-32 14.3-32 32l0 96 96 0c17.7 0 32-14.3 32-32l0-96-96 0z" />
    </Icon>
);

export default ObjectIntersect;