
import { Icon } from "../../index";

/**
 * A component that renders the `object-exclude` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-exclude?s=sharp-regular object-exclude}
 * @preview ![object-exclude](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/object-exclude.svg)
 */
const ObjectExclude: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 48l256 0 0 80 48 0 0-80 0-48L304 0 48 0 0 0 0 48 0 304l0 48 48 0 80 0 0-48-80 0L48 48zM160 384l0 80 0 48 48 0 256 0 48 0 0-48 0-256 0-48-48 0-80 0 0 48 80 0 0 256-256 0 0-80-48 0zm96-32l48 0 48 0 0-48 0-16-48 0 0 16-48 0 0 48zm96-144l0-48-48 0-16 0 0 48 16 0 0 48 48 0 0-48zM224 352l0-48-16 0 0-48-48 0 0 48 0 48 48 0 16 0zM160 208l0 16 48 0 0-16 48 0 0-48-48 0-48 0 0 48z" />
    </Icon>
);

export default ObjectExclude;