
import { Icon } from "../../index";

/**
 * A component that renders the `tv` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tv?s=thin tv}
 * @preview ![tv](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/tv.svg)
 */
const Tv: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M576 16c26.5 0 48 21.5 48 48l0 320c0 26.5-21.5 48-48 48L64 432c-26.5 0-48-21.5-48-48L16 64c0-26.5 21.5-48 48-48l512 0zM64 0C28.7 0 0 28.7 0 64L0 384c0 35.3 28.7 64 64 64l512 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 0zM96 504c0 4.4 3.6 8 8 8l432 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-432 0c-4.4 0-8 3.6-8 8zM80 80l480 0 0 288L80 368 80 80zM64 80l0 288c0 8.8 7.2 16 16 16l480 0c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L80 64c-8.8 0-16 7.2-16 16z" />
    </Icon>
);

export default Tv;