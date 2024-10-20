
import { Icon, generic } from "../../index";

/**
 * A component that renders the `object-subtract` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-subtract?s=duotone object-subtract}
 * @preview ![object-subtract](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/object-subtract.svg)
 */
const ObjectSubtract: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64L0 288c0 35.3 28.7 64 64 64l96 0 128 0c35.3 0 64-28.7 64-64l0-128 0-96c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64zm64 0l224 0 0 224L64 288 64 64z" />
        <path d="M448 512c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64l-96 0 0 128c0 35.3-28.7 64-64 64l-128 0 0 96c0 35.3 28.7 64 64 64l224 0z" />
    </Icon>
);

export default ObjectSubtract;