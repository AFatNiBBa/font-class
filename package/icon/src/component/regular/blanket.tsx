
import { Icon } from "../../index";

/**
 * A component that renders the `blanket` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blanket?s=regular blanket}
 * @preview ![blanket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/blanket.svg)
 */
const Blanket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 144l0 132.1C66.1 263.4 88.2 256 112 256l268 0c7 0 13.7 1 20 3l0-115c0-35.3-28.7-64-64-64L112 80c-35.3 0-64 28.7-64 64zM0 368L0 144C0 82.1 50.1 32 112 32l224 0c61.9 0 112 50.1 112 112l0 176-.1 0c.1 1.3 .1 2.7 .1 4c0 37.6-30.4 68-68 68l-260 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l260 0c11 0 20-9 20-20s-9-20-20-20l-268 0c-35.3 0-64 28.7-64 64s28.7 64 64 64l312 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-312 0C50.1 480 0 429.9 0 368z" />
    </Icon>
);

export default Blanket;