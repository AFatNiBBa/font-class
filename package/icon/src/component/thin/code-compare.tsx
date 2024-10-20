
import { Icon } from "../../index";

/**
 * A component that renders the `code-compare` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-compare?s=thin code-compare}
 * @preview ![code-compare](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/code-compare.svg)
 */
const CodeCompare: typeof Icon = x => (
    <Icon {...x}>
        <path d="M194.1 10.6c-3 3.3-2.7 8.3 .5 11.3L267.3 88 176 88C118.6 88 72 134.6 72 192l0 192.5c-31.6 3.9-56 30.9-56 63.5c0 35.3 28.7 64 64 64s64-28.7 64-64c0-32.6-24.4-59.6-56-63.5L88 192c0-48.6 39.4-88 88-88l91.3 0-72.7 66.1c-3.3 3-3.5 8-.5 11.3s8 3.5 11.3 .5l88-80c1.7-1.5 2.6-3.7 2.6-5.9s-1-4.4-2.6-5.9l-88-80c-3.3-3-8.3-2.7-11.3 .5zM80 400a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM317.9 501.4c3-3.3 2.7-8.3-.5-11.3L244.7 424l91.3 0c57.4 0 104-46.6 104-104l0-192.5c31.6-3.9 56-30.9 56-63.5c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 32.6 24.4 59.6 56 63.5L424 320c0 48.6-39.4 88-88 88l-91.3 0 72.7-66.1c3.3-3 3.5-8 .5-11.3s-8-3.5-11.3-.5l-88 80c-1.7 1.5-2.6 3.7-2.6 5.9s1 4.4 2.6 5.9l88 80c3.3 3 8.3 2.7 11.3-.5zM432 112a48 48 0 1 1 0-96 48 48 0 1 1 0 96z" />
    </Icon>
);

export default CodeCompare;