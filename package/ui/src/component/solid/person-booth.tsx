
import { Icon } from "../../index";

/**
 * A component that renders the `person-booth` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-booth?s=solid person-booth}
 * @preview ![person-booth](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/person-booth.svg)
 */
const PersonBooth: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160 64 0 0-160zm320 0c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-448zM224 512c17.7 0 32-14.3 32-32l0-160-64 0 0 160c0 17.7 14.3 32 32 32zM320 0c-9.3 0-18.1 4-24.2 11s-8.8 16.3-7.5 25.5l31.2 218.6L288.6 409.7c-3.5 17.3 7.8 34.2 25.1 37.7s34.2-7.8 37.7-25.1l.7-3.6c1.3 16.4 15.1 29.4 31.9 29.4c17.7 0 32-14.3 32-32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-384c0-17.7-14.3-32-32-32L320 0zM112 80A48 48 0 1 0 16 80a48 48 0 1 0 96 0zm0 261.3l0-72.1 4.7 4.7c9 9 21.2 14.1 33.9 14.1l73.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-66.7 0-41.6-41.6c-14.3-14.3-33.8-22.4-54-22.4C27.6 160 0 187.6 0 221.6l0 55.7 0 .9L0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96 32 42.7L96 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-58.7c0-10.4-3.4-20.5-9.6-28.8L112 341.3z" />
    </Icon>
);

export default PersonBooth;