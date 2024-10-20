
import { Icon } from "../../index";

/**
 * A component that renders the `object-subtract` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-subtract?s=sharp-solid object-subtract}
 * @preview ![object-subtract](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/object-subtract.svg)
 */
const ObjectSubtract: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 512l-352 0 0-160-96 0L0 352l0-64L0 64 0 0 64 0 288 0l64 0 0 64 0 96 160 0 0 352zM288 288l0-224L64 64l0 224 224 0z" />
    </Icon>
);

export default ObjectSubtract;