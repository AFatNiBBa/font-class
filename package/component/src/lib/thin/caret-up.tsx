
import { Icon } from "../../index";

/**
 * A component that renders the `caret-up` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-up?s=thin caret-up}
 * @preview ![caret-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/caret-up.svg)
 */
const CaretUp: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M144.6 150.6c4-4.2 9.6-6.6 15.4-6.6s11.4 2.4 15.4 6.6L300.5 282.7c2.2 2.3 3.5 5.4 3.5 8.7c0 7-5.6 12.6-12.6 12.6L28.6 304c-7 0-12.6-5.6-12.6-12.6c0-3.2 1.2-6.3 3.5-8.7L144.6 150.6zm-11.6-11L7.8 271.7C2.8 277 0 284.1 0 291.4C0 307.2 12.8 320 28.6 320l262.8 0c15.8 0 28.6-12.8 28.6-28.6c0-7.3-2.8-14.4-7.8-19.7L187 139.6c-7-7.4-16.8-11.6-27-11.6s-20 4.2-27 11.6z" />
    </Icon>
);

export default CaretUp;