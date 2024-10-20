
import { Icon } from "../../index";

/**
 * A component that renders the `object-exclude` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-exclude?s=regular object-exclude}
 * @preview ![object-exclude](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/object-exclude.svg)
 */
const ObjectExclude: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 48l224 0c8.8 0 16 7.2 16 16l0 64 48 0 0-64c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 288c0 35.3 28.7 64 64 64l64 0 0-48-64 0c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16zm96 336l0 64c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64l-64 0 0 48 64 0c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16l0-64-48 0zm128-32c35.3 0 64-28.7 64-64l-48 0c0 8.8-7.2 16-16 16l-32 0 0 48 32 0zm64-144l0-48-48 0-16 0 0 48 16 0 0 48 48 0 0-48zM224 352l0-48-16 0 0-48-48 0 0 48 0 48 48 0 16 0zM160 224l48 0c0-8.8 7.2-16 16-16l32 0 0-48-32 0c-35.3 0-64 28.7-64 64z" />
    </Icon>
);

export default ObjectExclude;