
import { Icon } from "../../index";

/**
 * A component that renders the `blanket` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blanket?s=thin blanket}
 * @preview ![blanket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/blanket.svg)
 */
const Blanket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 120l0 221.4C31.9 318.8 58.2 304 88 304l312 0c12.3 0 23.5 4.6 32 12.2L432 120c0-39.8-32.2-72-72-72L88 48c-39.8 0-72 32.2-72 72zM.4 384L0 384 0 120C0 71.4 39.4 32 88 32l272 0c48.6 0 88 39.4 88 88l0 232c0 26.5-21.5 48-48 48L88 400c-4.4 0-8-3.6-8-8s3.6-8 8-8l312 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L88 320c-39.8 0-72 32.2-72 72s32.2 72 72 72l352 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L88 480c-48.6 0-88-39.4-88-88c0-2.7 .1-5.4 .4-8z" />
    </Icon>
);

export default Blanket;