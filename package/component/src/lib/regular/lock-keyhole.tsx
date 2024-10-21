
import { Icon } from "../../index";

/**
 * A component that renders the `lock-keyhole` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-keyhole?s=regular lock-keyhole}
 * @preview ![lock-keyhole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/lock-keyhole.svg)
 */
const LockKeyhole: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 48c44.2 0 80 35.8 80 80l0 64-160 0 0-64c0-44.2 35.8-80 80-80zM96 128l0 64-32 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-32 0 0-64C352 57.3 294.7 0 224 0S96 57.3 96 128zM64 240l320 0c8.8 0 16 7.2 16 16l0 192c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-192c0-8.8 7.2-16 16-16zm184 80c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64z" />
    </Icon>
);

export default LockKeyhole;