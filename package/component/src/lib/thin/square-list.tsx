
import { Icon } from "../../index";

/**
 * A component that renders the `square-list` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-list?s=thin square-list}
 * @preview ![square-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-list.svg)
 */
const SquareList: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 48c26.5 0 48 21.5 48 48l0 320c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48L16 96c0-26.5 21.5-48 48-48l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm96 128c0 4.4 3.6 8 8 8l192 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-192 0c-4.4 0-8 3.6-8 8zm0 96c0 4.4 3.6 8 8 8l192 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-192 0c-4.4 0-8 3.6-8 8zm0 96c0 4.4 3.6 8 8 8l192 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-192 0c-4.4 0-8 3.6-8 8zM96 144a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm16 112a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM96 336a16 16 0 1 0 0 32 16 16 0 1 0 0-32z" />
    </Icon>
);

export default SquareList;