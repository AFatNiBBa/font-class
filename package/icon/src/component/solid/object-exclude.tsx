
import { Icon } from "../../index";

/**
 * A component that renders the `object-exclude` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-exclude?s=solid object-exclude}
 * @preview ![object-exclude](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/object-exclude.svg)
 */
const ObjectExclude: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 64C0 28.7 28.7 0 64 0L288 0c35.3 0 64 28.7 64 64l0 96 96 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64l-224 0c-35.3 0-64-28.7-64-64l0-96-96 0c-35.3 0-64-28.7-64-64L0 64zM320 192l-128 0 0 128 128 0 0-128z" />
    </Icon>
);

export default ObjectExclude;