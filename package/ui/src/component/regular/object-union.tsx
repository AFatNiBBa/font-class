
import { Icon } from "../../index";

/**
 * A component that renders the `object-union` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-union?s=regular object-union}
 * @preview ![object-union](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/object-union.svg)
 */
const ObjectUnion: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 304c26.5 0 48 21.5 48 48l0 96c0 8.8 7.2 16 16 16l224 0c8.8 0 16-7.2 16-16l0-224c0-8.8-7.2-16-16-16l-96 0c-26.5 0-48-21.5-48-48l0-96c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16l96 0zm-48 48l-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L288 0c35.3 0 64 28.7 64 64l0 48 0 48 48 0 48 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64l-224 0c-35.3 0-64-28.7-64-64l0-48 0-48-48 0z" />
    </Icon>
);

export default ObjectUnion;