
import { Icon } from "../../index";

/**
 * A component that renders the `object-subtract` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-subtract?s=solid object-subtract}
 * @preview ![object-subtract](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/object-subtract.svg)
 */
const ObjectSubtract: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 448c0 35.3-28.7 64-64 64l-224 0c-35.3 0-64-28.7-64-64l0-96-96 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L288 0c35.3 0 64 28.7 64 64l0 96 96 0c35.3 0 64 28.7 64 64l0 224zM288 288l0-224L64 64l0 224 224 0z" />
    </Icon>
);

export default ObjectSubtract;