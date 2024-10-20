
import { Icon } from "../../index";

/**
 * A component that renders the `object-union` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-union?s=light object-union}
 * @preview ![object-union](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/object-union.svg)
 */
const ObjectUnion: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 320c17.7 0 32 14.3 32 32l0 96c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32l-96 0c-17.7 0-32-14.3-32-32l0-96c0-17.7-14.3-32-32-32L64 32C46.3 32 32 46.3 32 64l0 224c0 17.7 14.3 32 32 32l96 0zm-32 32l-64 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L288 0c35.3 0 64 28.7 64 64l0 64 0 32 32 0 64 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64l-224 0c-35.3 0-64-28.7-64-64l0-64 0-32-32 0z" />
    </Icon>
);

export default ObjectUnion;