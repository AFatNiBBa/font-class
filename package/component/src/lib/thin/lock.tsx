
import { Icon } from "../../index";

/**
 * A component that renders the `lock` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock?s=thin lock}
 * @preview ![lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/lock.svg)
 */
const Lock: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M112 128l0 64 224 0 0-64c0-61.9-50.1-112-112-112s-112 50.1-112 112zM96 192l0-64C96 57.3 153.3 0 224 0s128 57.3 128 128l0 64 32 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l32 0zm0 16l-32 0c-26.5 0-48 21.5-48 48l0 192c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-192c0-26.5-21.5-48-48-48l-32 0-16 0-224 0-16 0z" />
    </Icon>
);

export default Lock;