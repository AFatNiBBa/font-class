
import { Icon } from "../../index";

/**
 * A component that renders the `border-inner` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-inner?s=sharp-solid border-inner}
 * @preview ![border-inner](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/border-inner.svg)
 */
const BorderInner: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 416l64 0 0 64L0 480l0-64zm96 0l64 0 0 64-64 0 0-64zM96 32l64 0 0 64L96 96l0-64zM352 480l-64 0 0-64 64 0 0 64zm0-448l0 64-64 0 0-64 64 0zm96 448l-64 0 0-64 64 0 0 64zM0 32l64 0 0 64L0 96 0 32zM384 384l0-64 64 0 0 64-64 0zm0-288l0-64 64 0 0 64-64 0zM0 320l64 0 0 64L0 384l0-64zM384 192l0-64 64 0 0 64-64 0zM0 128l64 0 0 64L0 192l0-64zm0 96l32 0 160 0 0-160 0-32 64 0 0 32 0 160 160 0 32 0 0 64-32 0-160 0 0 160 0 32-64 0 0-32 0-160L32 288 0 288l0-64z" />
    </Icon>
);

export default BorderInner;