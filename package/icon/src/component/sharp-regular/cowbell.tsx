
import { Icon } from "../../index";

/**
 * A component that renders the `cowbell` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cowbell?s=sharp-regular cowbell}
 * @preview ![cowbell](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/cowbell.svg)
 */
const Cowbell: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 0l24 0L296 0l24 0 0 24 0 72 64 0 54.4 272 9.6 48-49 0L49 416 0 416l9.6-48L64 96l64 0 0-72 0-24zM272 48l-96 0 0 48 96 0 0-48zM103.4 144L58.6 368l330.9 0L344.6 144l-241.3 0zM288 448c0 35.3-28.7 64-64 64s-64-28.7-64-64l128 0z" />
    </Icon>
);

export default Cowbell;