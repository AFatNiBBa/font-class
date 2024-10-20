
import { Icon } from "../../index";

/**
 * A component that renders the `tree-christmas` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tree-christmas?s=sharp-solid tree-christmas}
 * @preview ![tree-christmas](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/tree-christmas.svg)
 */
const TreeChristmas: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 81.3l53.3-28L224 0l26.7 53.3L304 80l-53.3 26.7L224 160l-26.7-53.3L144 81.3zM24 320L174.3 132.1 204.2 192l39.6 0 29.9-59.9L424 320l0 32-56 0 80 128 0 32L0 512l0-32L80 352l-56 0 0-32zm160-32a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM288 440a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default TreeChristmas;