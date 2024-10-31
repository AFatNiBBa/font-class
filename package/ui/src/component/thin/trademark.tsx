
import { Icon } from "../../index";

/**
 * A component that renders the `trademark` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trademark?s=thin trademark}
 * @preview ![trademark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/trademark.svg)
 */
const Trademark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 104c0 4.4 3.6 8 8 8l112 0 0 296c0 4.4 3.6 8 8 8s8-3.6 8-8l0-296 112 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L8 96c-4.4 0-8 3.6-8 8zm302-5.3c-2.2-2.5-5.7-3.4-8.8-2.2s-5.2 4.2-5.2 7.5l0 304c0 4.4 3.6 8 8 8s8-3.6 8-8l0-282.7 154 176c1.5 1.7 3.7 2.7 6 2.7s4.5-1 6-2.7l154-176L624 408c0 4.4 3.6 8 8 8s8-3.6 8-8l0-304c0-3.3-2.1-6.3-5.2-7.5s-6.6-.3-8.8 2.2L464 283.8 302 98.7z" />
    </Icon>
);

export default Trademark;