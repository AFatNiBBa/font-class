
import { Icon } from "../../index";

/**
 * A component that renders the `mobile` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile?s=thin mobile}
 * @preview ![mobile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/mobile.svg)
 */
const Mobile: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M96 16C69.5 16 48 37.5 48 64l0 384c0 26.5 21.5 48 48 48l192 0c26.5 0 48-21.5 48-48l0-384c0-26.5-21.5-48-48-48L96 16zM32 64C32 28.7 60.7 0 96 0L288 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64L32 64zM144 432l96 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-96 0c-4.4 0-8-3.6-8-8s3.6-8 8-8z" />
    </Icon>
);

export default Mobile;