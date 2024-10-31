
import { Icon } from "../../index";

/**
 * A component that renders the `copy` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/copy?s=light copy}
 * @preview ![copy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/copy.svg)
 */
const Copy: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 352l-160 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l108.1 0c4.2 0 8.3 1.7 11.3 4.7l67.9 67.9c3 3 4.7 7.1 4.7 11.3L416 320c0 17.7-14.3 32-32 32zM433.9 81.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L224 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l160 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l160 0c35.3 0 64-28.7 64-64l0-32-32 0 0 32c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0 0-32-64 0z" />
    </Icon>
);

export default Copy;