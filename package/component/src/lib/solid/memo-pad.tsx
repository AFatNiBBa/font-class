
import { Icon } from "../../index";

/**
 * A component that renders the `memo-pad` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/memo-pad?s=solid memo-pad}
 * @preview ![memo-pad](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/memo-pad.svg)
 */
const MemoPad: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64L0 96l448 0 0-32c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64zm0 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320L0 128zm96 96c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16zm0 96c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16zm0 96c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default MemoPad;