
import { Icon } from "../../index";

/**
 * A component that renders the `seedling` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/seedling?s=solid seedling}
 * @preview ![seedling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/seedling.svg)
 */
const Seedling: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0l32 0c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64l32 0c123.7 0 224 100.3 224 224l0 32 0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160C100.3 320 0 219.7 0 96z" />
    </Icon>
);

export default Seedling;