
import { Icon } from "../../index";

/**
 * A component that renders the `square-6` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-6?s=thin square-6}
 * @preview ![square-6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-6.svg)
 */
const Square_6: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm270 34.7c2.9 3.3 2.6 8.4-.8 11.3l-58.1 50.8c4.2-.6 8.5-.8 12.8-.8c53 0 96 43 96 96s-43 96-96 96s-96-43-96-96c0-16.6 4.2-32.2 11.6-45.8c5.4-9.9 12.5-19 21.2-26.6L258.7 130c3.3-2.9 8.4-2.6 11.3 .8zM224 368a80 80 0 1 0 .1-160A80 80 0 1 0 224 368z" />
    </Icon>
);

export default Square_6;