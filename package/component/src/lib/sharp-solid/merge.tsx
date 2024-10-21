
import { Icon } from "../../index";

/**
 * A component that renders the `merge` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/merge?s=sharp-solid merge}
 * @preview ![merge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/merge.svg)
 */
const Merge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 64l15.4 0L185 76 303.4 224l80.6 0 0-64 32 0 96 96-96 96-32 0 0-64-80.6 0L185 436l-9.6 12L160 448 32 448 0 448l0-64 32 0 112.6 0L247 256 144.6 128 32 128 0 128 0 64l32 0 128 0z" />
    </Icon>
);

export default Merge;