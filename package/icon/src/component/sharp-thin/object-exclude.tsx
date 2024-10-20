
import { Icon } from "../../index";

/**
 * A component that renders the `object-exclude` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-exclude?s=sharp-thin object-exclude}
 * @preview ![object-exclude](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/object-exclude.svg)
 */
const ObjectExclude: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 16l320 0 0 112 16 0 0-112 0-16L336 0 16 0 0 0 0 16 0 336l0 16 16 0 112 0 0-16L16 336 16 16zM160 384l0 112 0 16 16 0 320 0 16 0 0-16 0-320 0-16-16 0-112 0 0 16 112 0 0 320-320 0 0-112-16 0zm96-32l80 0 16 0 0-16 0-48-16 0 0 48-80 0 0 16zm96-176l0-16-16 0-48 0 0 16 48 0 0 80 16 0 0-80zM224 352l0-16-48 0 0-80-16 0 0 80 0 16 16 0 48 0zM160 224l16 0 0-48 80 0 0-16-80 0-16 0 0 16 0 48z" />
    </Icon>
);

export default ObjectExclude;