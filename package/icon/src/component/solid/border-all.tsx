
import { Icon } from "../../index";

/**
 * A component that renders the `border-all` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-all?s=solid border-all}
 * @preview ![border-all](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/border-all.svg)
 */
const BorderAll: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 96l0 128-128 0 0-128 128 0zm0 192l0 128-128 0 0-128 128 0zM192 224L64 224 64 96l128 0 0 128zM64 288l128 0 0 128L64 416l0-128zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z" />
    </Icon>
);

export default BorderAll;