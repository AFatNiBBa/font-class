
import { Icon, generic } from "../../index";

/**
 * A component that renders the `object-subtract` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-subtract?s=sharp-duotone-solid object-subtract}
 * @preview ![object-subtract](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/object-subtract.svg)
 */
const ObjectSubtract: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L0 64 0 288l0 64 64 0 96 0 128 0 64 0 0-64 0-128 0-96 0-64L288 0 64 0 0 0zM64 64l224 0 0 224L64 288 64 64z" />
        <path d="M160 512l352 0 0-352-160 0 0 192-192 0 0 160z" />
    </Icon>
);

export default ObjectSubtract;