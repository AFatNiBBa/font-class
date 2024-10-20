
import { Icon } from "../../index";

/**
 * A component that renders the `border-all` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-all?s=regular border-all}
 * @preview ![border-all](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/border-all.svg)
 */
const BorderAll: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 80c8.8 0 16 7.2 16 16l0 136-152 0 0-152 136 0zm16 200l0 136c0 8.8-7.2 16-16 16l-136 0 0-152 152 0zM200 232L48 232 48 96c0-8.8 7.2-16 16-16l136 0 0 152zM48 280l152 0 0 152L64 432c-8.8 0-16-7.2-16-16l0-136zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z" />
    </Icon>
);

export default BorderAll;