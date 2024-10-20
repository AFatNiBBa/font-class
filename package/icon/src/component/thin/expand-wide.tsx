
import { Icon } from "../../index";

/**
 * A component that renders the `expand-wide` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/expand-wide?s=thin expand-wide}
 * @preview ![expand-wide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/expand-wide.svg)
 */
const ExpandWide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M120 64c4.4 0 8 3.6 8 8s-3.6 8-8 8L16 80l0 104c0 4.4-3.6 8-8 8s-8-3.6-8-8L0 72c0-4.4 3.6-8 8-8l112 0zM0 328c0-4.4 3.6-8 8-8s8 3.6 8 8l0 104 104 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 448c-4.4 0-8-3.6-8-8L0 328zM392 64l112 0c4.4 0 8 3.6 8 8l0 112c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-104L392 80c-4.4 0-8-3.6-8-8s3.6-8 8-8zM512 328l0 112c0 4.4-3.6 8-8 8l-112 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l104 0 0-104c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
    </Icon>
);

export default ExpandWide;