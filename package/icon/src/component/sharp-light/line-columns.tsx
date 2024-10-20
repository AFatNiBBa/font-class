
import { Icon } from "../../index";

/**
 * A component that renders the `line-columns` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/line-columns?s=sharp-light line-columns}
 * @preview ![line-columns](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/line-columns.svg)
 */
const LineColumns: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 48L0 48 0 80l16 0 192 0 16 0 0-32-16 0L16 48zm0 128L0 176l0 32 16 0 192 0 16 0 0-32-16 0L16 176zM0 304l0 32 16 0 192 0 16 0 0-32-16 0L16 304 0 304zM16 432L0 432l0 32 16 0 192 0 16 0 0-32-16 0L16 432zM288 176l0 32 16 0 192 0 16 0 0-32-16 0-192 0-16 0zM304 48l-16 0 0 32 16 0 192 0 16 0 0-32-16 0L304 48zM288 304l0 32 16 0 192 0 16 0 0-32-16 0-192 0-16 0zm16 128l-16 0 0 32 16 0 192 0 16 0 0-32-16 0-192 0z" />
    </Icon>
);

export default LineColumns;