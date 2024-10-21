
import { Icon } from "../../index";

/**
 * A component that renders the `mug-tea` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mug-tea?s=sharp-regular mug-tea}
 * @preview ![mug-tea](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/mug-tea.svg)
 */
const MugTea: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M152 112l0 24-40 40 0 112 112 0 0-112-40-40 0-24 184 0 0 288L80 400l0-288 72 0zM80 64L32 64l0 48 0 288 0 48 48 0 288 0 48 0 0-48 0-80 32 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l-32 0-32 0-16 0L80 64zM448 272l-32 0 0-160 32 0c44.2 0 80 35.8 80 80s-35.8 80-80 80z" />
    </Icon>
);

export default MugTea;